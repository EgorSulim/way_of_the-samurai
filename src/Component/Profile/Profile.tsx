import classes from "./MyPosts/MyPost.module.css"
import React from "react";
import {MyPost} from "./MyPosts/MyPost";
import {ActionsType, ProfilePageType} from "../../Redux/state";


type propsType={
    posts:ProfilePageType
    dispatch: (action:ActionsType) => void
}


export const Profile = (props:propsType) => {

    return (
            <div className={classes.profile}>
            <div className={classes.images}>
                <img src="https://cdn.pixabay.com/photo/2021/08/15/07/35/ferris-wheel-6547089_960_720.jpg"/>
               <MyPost posts={props.posts.posts} dispatch={props.dispatch}  newPostMessage={props.posts.newPostMessage} />
            </div>
            </div>
    ) }