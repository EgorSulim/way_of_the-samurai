import preloader from "../../assets/images/1488.gif";
import React from "react";

type PropsType={
    isFetching:boolean
}

export const Preloader=(props:PropsType)=>{
    return props.isFetching ? <img src={preloader}/> : null
}