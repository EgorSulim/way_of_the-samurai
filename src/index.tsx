import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import App from "./App";
import {store} from "./Redux/state";




export let renderEntireTree = () => ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
);
renderEntireTree()
store.subscribe(renderEntireTree)