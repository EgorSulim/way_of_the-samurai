import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";
import {Content} from "./components/Content/Content";
import {Navigation} from "./components/Navigation/Navigation";


function App() {
    return (
        <div className="App">
            <Header/>
            <Navigation/>
            <Content/>

        </div>
    );
}

export default App;
