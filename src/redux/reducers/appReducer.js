import {authAPI} from "../../api/api";
import {stopSubmit} from "redux-form";
import {authorize} from "./authReducer";

const INITIALIZED_SUCCESSFULLY = 'INITIALIZED-SUCCESSFULLY';

let initialState = {
   initialized: false,
    email: null,
    login: null,
    isAuth: false
};


const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESSFULLY: {
            return {
                ...state,
                initialized: true
            }
        }

        default:
            return state;

    }
}

export const initializedSuccessfully = () => (
    {
        type: INITIALIZED_SUCCESSFULLY
    }
);

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(authorize());

    Promise.all([promise]).then(()=>{
        dispatch(initializedSuccessfully());
    })

}

export default appReducer;