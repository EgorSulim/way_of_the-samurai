import {NavLink} from "react-router-dom";
import React from "react";
import classes from "./NickName.module.css";

type NickNamePropsType={
    name:string
    id:number
}

let Url='/messages/'

export const NickName=(props:NickNamePropsType)=>{
    return(
        <div className={classes.NickName}><NavLink to={Url+props.id}>{props.name}</NavLink></div>
    )
}