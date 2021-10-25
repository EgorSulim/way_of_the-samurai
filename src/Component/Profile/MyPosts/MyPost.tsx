import classes from "./MyPost.module.css";
import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import {PostType} from "../../../Redux/ProfileReducer";
import {KeyboardEvent} from "react";

type propsType = {
    newPostMessage:string
    posts: Array<PostType>
    addPost:()=>void
    updateNewPostText:(text:string)=>void
}
export const MyPost = (props: propsType) => {
    let postsNew = props.posts.map((pos) => {
        return (
            <Post message={pos.post} like={pos.like}/>
        )
    })

    const addPost = () => {
        props.addPost()

    }
    const onKeyPressHandler=(e:KeyboardEvent<HTMLTextAreaElement>)=>{
        if(e.charCode===13){
            props.addPost()
        }
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={classes.profile}>
            <div>My Post</div>
            <div>
                <textarea value={props.newPostMessage} onKeyPress={onKeyPressHandler} onChange={onPostChange} ></textarea>
                <button onClick={addPost} >Add text</button>
            </div>
            {postsNew}
        </div>
    )
}