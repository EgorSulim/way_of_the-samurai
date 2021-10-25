import React, {ChangeEvent} from "react";
import { MessagesPageType } from "../../Redux/dialogsReducer";
import classes from "./Message.module.css";
import {Message} from "./Message/Message";
import {NickName} from "./NickName/NickName";


type PropsType = {
    dialogsPage: MessagesPageType
    sendMessage:()=>void
    updateNewMessageBody:(body:string)=>void
}

export const Dialogs = (props: PropsType) => {
    let newMessage = props.dialogsPage.messages.map((mess) => {
        return (
            <Message message={mess.message}/>
        )
    })

    let newNames = props.dialogsPage.names.map((nam) => {
        return (
            <NickName name={nam.name} id={nam.id}/>
        )
    })

    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let newMessageBody = props.dialogsPage.newMessageBody
    let onNewMessgeChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.updateNewMessageBody(body)
    }
    return (
        <div className={classes.profile}>
            <div className={classes.nickname}>
                {newNames}
            </div>
            <div>
                {newMessage}
                <div><textarea value={newMessageBody} onChange={onNewMessgeChange}></textarea></div>
                <div>
                    <button onClick={onSendMessageClick}>send</button>
                </div>
            </div>

        </div>

    )
}

