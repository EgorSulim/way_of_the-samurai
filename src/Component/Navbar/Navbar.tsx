import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css"


export const Navbar=()=>{
    return(
        <div className={classes.nav}>
            <div><NavLink to='/profile'>Profile</NavLink></div>
            <div><NavLink to='/messages'>Messages</NavLink></div>
            <div>News</div>
            <div>Music</div>

            <div>Settings</div>
        </div>
    )
}