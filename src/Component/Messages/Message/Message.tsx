import {NavLink} from "react-router-dom";
import React from "react";
import {findAllByDisplayValue} from "@testing-library/react";

type MessagePropsType={
    message:string
}

export const Message=(props:MessagePropsType)=>{
    return(
        <div>
            <div>{props.message}</div>

        </div>
    )
}