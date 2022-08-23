import {authAPI} from "../api/api";

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