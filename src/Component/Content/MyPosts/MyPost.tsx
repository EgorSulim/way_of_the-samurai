import classes from "./MyPost.module.css";
import React from "react";
import {Post} from "./Post/Post";

type postsType={
    post:string
    like:number
}

let posts=[
    {post:'React is a good library',like:4},
    {post: 'it-incubator',like:5},
    {post:'The Samurai way',like:3}
]

let postsNew=posts.map((pos)=>{
    return (
        <Post message={pos.post} like={pos.like}/>
    )
})

export const MyPost = () => {
    return (
        <div className={classes.profile}>
            <div className={classes.images}>
                <img src="https://cdn.pixabay.com/photo/2021/08/15/07/35/ferris-wheel-6547089_960_720.jpg"/>
                <div>My Post</div>
                <div>
                    <textarea></textarea>
                    <button>Add text</button>
                </div>
            </div>
            {postsNew}
        </div>
    )
}