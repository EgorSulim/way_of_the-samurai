import {Pagination} from "../Pagination/Pagination";
import image from "../../assets/images/standoff_160.jpg";
import classes from "./Users.module.css";
import React from "react";
import {initialStateType} from "../../Redux/userReducer";
import { NavLink } from "react-router-dom";

type propsType = {
    usersPage: initialStateType
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    pageSize: number
    totalCount: number
    follow: (userId: number) => void
    unfollow: (userID: number) => void
}

export const Users = (props: propsType) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)}
        return (
            <div className={classes.users}>
                <Pagination onPageChanged={props.onPageChanged}
                            currentPage={props.currentPage}
                            pageSize={props.pageSize}
                            totalCount={props.totalCount}
                            portionSize={10}
                />
                {props.usersPage.users.map((m) => {
                    return (
                        <div>
                            <div>
                            <NavLink to={'/profile/'+m.id}><img src={m.photos.small !== null ? m.photos.small : image}
                                className={classes.userPhoto}/>
                            </NavLink>
                                <div>{m.name}</div>
                                <div>{m.status}</div>
                            </div>
                            {m.followed ? <button onClick={() => props.follow(m.id)}>follow</button> :
                                <button onClick={() => props.unfollow(m.id)}>unfollow</button>}
                        </div>
                    )
                })}
                <Pagination onPageChanged={props.onPageChanged}
                            currentPage={props.currentPage}
                            pageSize={props.pageSize}
                            totalCount={props.totalCount}
                            portionSize={10}
                />
        )    </div>)
    }
