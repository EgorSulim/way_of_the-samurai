import React from 'react';
import logo from './logo.svg';
import classes from './App.module.css'
import {MyPost} from './Component/Content/MyPosts/MyPost';
import {Header} from "./Component/Header/Header";
import {Navbar} from "./Component/Navbar/Navbar";
import {Messages} from "./Component/Content/Messages/Messages";
import {BrowserRouter, Route} from 'react-router-dom';


function App() {
    return (
        <BrowserRouter>
            <div className={classes.App}>
                <Navbar/>
                <Header/>
                <Route path='/profile' component={MyPost}/>
                <Route path='/messages' component={Messages}/>
            </div>
        </BrowserRouter>

    );
}

export default App;
