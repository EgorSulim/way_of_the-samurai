import React from 'react';
import classes from './App.module.css'
import {Header} from "./Component/Header/Header";
import {Navbar} from "./Component/Navbar/Navbar";
import {Messages} from "./Component/Messages/Messages";
import {BrowserRouter, Route} from 'react-router-dom';
import {Profile} from "./Component/Profile/Profile";
import {RootStateType, storeType} from "./Redux/state";

type propsType = {
    store: storeType
}

function App(props: propsType) {
    const state = props.store.getState()
    return (

        <div className={classes.App}>
            <Navbar/>
            <Header/>
            <Route path='/profile' render={() => <Profile posts={state.profilePage}
                                                          dispatch={props.store.dispatch.bind(props.store)}
            />}/>
            <Route path='/messages' render={() => <Messages messagesPage={state.messagesPage}/>}/>
        </div>

    );
}

export default App;
