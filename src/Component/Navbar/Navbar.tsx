import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css"


export const Navbar=()=>{
    return(
        <div className={classes.nav}>
            <div className={classes.item}><NavLink activeClassName={classes.active} to='/profile'>Profile</NavLink></div>
            <div className={classes.item}><NavLink activeClassName={classes.active} to='/users'>Users</NavLink></div>
            <div className={classes.item}><NavLink activeClassName={classes.active} to='/messages'>Messages</NavLink></div>
            <div className={classes.item}><NavLink activeClassName={classes.active} to={'/news'}>News</NavLink></div>
            <div className={classes.item}><NavLink activeClassName={classes.active} to={'/music'}>Music</NavLink></div>
            <div className={classes.item}><NavLink activeClassName={classes.active} to={'/settings'}>Settings</NavLink></div>
        </div>
    )
}