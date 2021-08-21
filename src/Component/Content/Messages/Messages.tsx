import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./Message.module.css";
import {Message} from "./Message/Message";
import {NickName} from "./NickName/NickName";


let names = [
    {id: 1, name: 'Egor'},
    {id: 2, name: 'Vlad'},
    {id: 3, name: 'Max'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Kolya'},
]

let message = [
    {message: 'I go to the gim'},
    {message: 'we are the champion!!!))'},
    {message: 'we like the react'},
    {message: 'you need a doctor'}
]

let newMessage=message.map((mess )=>{
    return(
        <Message message={mess.message}/>
    )
})

let newNames=names.map((nam )=>{
    return(
        <NickName name={nam.name} id={nam.id}/>
    )
})

export const Messages = () => {
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