import React from 'react';
import classes from './App.module.css'
import {Navbar} from "./Component/Navbar/Navbar";
import {Route} from 'react-router-dom';
import {DialogsContainer} from "./Component/Messages/DialogsContainer";
import {UsersContainer} from "./Component/Users/UsersContainer";
import {ProfileContainer} from "./Component/Profile/ProfileC";
import HeaderContainer from "./Component/Header/HeaderContainer";





function App() {
    return (

        <div className={classes.App}>
            <Navbar/>
            <HeaderContainer/>
            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
            <Route path='/messages' render={() => <DialogsContainer/>}/>
            <Route path='/users' render={() => <UsersContainer/>}
            />
        </div>

    );
}

export default App;
