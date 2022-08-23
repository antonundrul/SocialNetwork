import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};


const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            }
        }

        default:
            return state;

    }
}

export const setAuthUserData = (userId, email, login, isAuth) => (
    {
        type: SET_USER_DATA,
        data: {userId, email, login, isAuth}
    }
);

export const authorize = () => (dispatch) => {
    authAPI.me().then(data => {
        if (data.resultCode === 0) {
            let {id, email, login} = data.data
            dispatch(setAuthUserData(id, email, login,true));
        }

    });
}

export const login = (email, password,rememberMe) => (dispatch) => {
    authAPI.login(email, password,rememberMe).then(data => {
        if (data.resultCode === 0) {
            dispatch(authorize());
        } else {
            let message = data.messages.length>0 ? data.messages[0] : "Some error"
            dispatch(stopSubmit("login", {_error:message}))
        }


    });
}

export const logout = () => (dispatch) => {
    authAPI.logout().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null,false));
        }

    });
}

export default authReducer;