import React from 'react';
import classes from './App.module.css'
import {Header} from "./Component/Header/Header";
import {Navbar} from "./Component/Navbar/Navbar";
import {Route} from 'react-router-dom';
import {Profile} from "./Component/Profile/Profile";
import {DialogsContainer} from "./Component/Messages/DialogsContainer";
import {UsersContainer} from "./Component/Users/UsersContainer";



function App() {
    return (

        <div className={classes.App}>
            <Navbar/>
            <Header/>
            <Route path='/profile' render={() => <Profile/>}/>
            <Route path='/messages' render={() => <DialogsContainer/>}/>
            <Route path='/users' render={() => <UsersContainer/>}
            />
        </div>

    );
}

export default App;
