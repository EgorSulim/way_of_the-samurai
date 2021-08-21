import React from "react";
import classes from "./Post.module.css";

type PostType = {
    message: string
    like: number
}

export const Post = (props: PostType) => {
    return (
        <div className={classes.posts}>
            <div className={classes.image}>
                <img src='https://cdn.pixabay.com/photo/2021/07/23/14/52/submarine-6487509_960_720.png'></img>
                {props.message}
                <div>Like:{props.like}</div>

            </div>

        </div>
    )
}