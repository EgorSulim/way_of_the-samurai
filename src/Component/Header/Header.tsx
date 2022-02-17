import classes from './Header.module.css'
import React from "react";
import {NavLink} from 'react-router-dom';

type HeaderPropsType = {
    data: {
        id: number
        email: string
        login: string
    }
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={classes.header}>
            <p>Header</p>
            <div className={classes.loginBlock}>
                <NavLink to={'/login'}>{props.data.login}</NavLink>
            </div>
        </header>
    )
}