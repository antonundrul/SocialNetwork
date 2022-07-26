import {combineReducers} from "redux";
import { legacy_createStore as createStore} from 'redux'
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

export const API_KEY = '5e756f19-4182-43de-b1fb-4f5a83291dc1'

let reducers = combineReducers( {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers);

export default store;

window.store = store