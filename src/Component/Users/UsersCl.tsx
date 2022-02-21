import {Pagination} from "../Pagination/Pagination";
import image from "../../assets/images/standoff_160.jpg";
import classes from "./Users.module.css";
import React from "react";
import {initialStateType} from "../../Redux/userReducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type propsType = {
    usersPage: initialStateType
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    pageSize: number
    totalCount: number
    follow: (userId: number) => void
    unfollow: (userID: number) => void
    toggleFollowingProgress:(followingInProgress: [boolean, number],userId:number)=>void
    followingInProgress: [boolean, number]
}

export const Users = (props: propsType) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
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
                            <NavLink to={'/profile/' + m.id}><img src={m.photos.small !== null ? m.photos.small : image}
                                                                  className={classes.userPhoto}/>
                            </NavLink>
                            <div>{m.name}</div>
                            <div>{m.status}</div>
                        </div>
                        {m.followed
                            ? <button disabled={props.followingInProgress.some(id=>id===m.id)} onClick={() => {
                                props.toggleFollowingProgress([true,m.id],m.id)
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${m.id}`,
                                    {
                                        withCredentials: true,
                                        headers: {"API-KEY": "e8421c8d-f20b-4037-99e1-c0e74f0f447b"}
                                    })
                                    .then(res => {
                                        if (res.data.resultCode === 0) {
                                            props.unfollow(m.id)
                                            props.toggleFollowingProgress([false,m.id],m.id)
                                        }
                                    })
                            }}>unfollow</button>
                            : <button disabled={props.followingInProgress.some(id=>id===m.id)} onClick={() => {
                                props.toggleFollowingProgress([true,m.id],m.id)
                                axios.defaults.withCredentials = true
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${m.id}`, {},
                                    {
                                        withCredentials: true,
                                        headers: {"API-KEY": "e8421c8d-f20b-4037-99e1-c0e74f0f447b"}
                                    })
                                    .then(res => {
                                        if(res.data.resultCode===0)
                                        {
                                            props.toggleFollowingProgress([false,m.id],m.id)
                                            props.follow(m.id)
                                        }
                                    })

                            }}>follow</button>

                        }
                    </div>
                )
            })}
            <Pagination onPageChanged={props.onPageChanged}
                        currentPage={props.currentPage}
                        pageSize={props.pageSize}
                        totalCount={props.totalCount}
                        portionSize={10}
            />
            ) </div>)
}
