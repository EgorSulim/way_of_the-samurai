import classes from "./MyPosts/MyPost.module.css"
import React from "react";

import {ActionsType, ProfilePageType} from "../../Redux/ProfileReducer";
import {MyPostContainer} from "./MyPosts/MyPostContainer";




export const Profile = () => {

    return (
            <div className={classes.profile}>
            <div className={classes.images}>
                <img src="https://cdn.pixabay.com/photo/2021/08/15/07/35/ferris-wheel-6547089_960_720.jpg"/>
               <MyPostContainer  />
            </div>
            </div>
    ) }