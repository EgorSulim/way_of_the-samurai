import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./Message.module.css";
import {Message} from "./Message/Message";
import {NickName} from "./NickName/NickName";
import {MessagesPageType} from "../../Redux/state";

type PropsType={
    messagesPage:MessagesPageType
}

export const Messages = (props:PropsType) => {
    let newMessage=props.messagesPage.messages.map((mess )=>{
        return(
            <Message message={mess.message}/>
        )
    })

    let newNames=props.messagesPage.names.map((nam )=>{
        return(
            <NickName name={nam.name} id={nam.id}/>
        )
    })
    return (
        <div className={classes.profile}>
            <div className={classes.nickname}>
                {newNames}
            </div>
            <div>
                {newMessage}
            </div>
        </div>

    )
}