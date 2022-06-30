import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state from "./redux/state";

import ReactDOM from "react-dom/client";
import App from "./App";
import {addPost} from "./redux/state";
import {updateNewPostText} from "./redux/state";

import {subscribe} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state}
                 updaeNewPostText={updateNewPostText}
                 addPost={addPost}/>
        </React.StrictMode>);

}
rerenderEntireTree(state);

subscribe(rerenderEntireTree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
