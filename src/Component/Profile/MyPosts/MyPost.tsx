import classes from "./MyPost.module.css";
import React, {ChangeEvent, LegacyRef, Ref} from "react";
import {ActionsType, addPostAC, PostType, textNewTextAC} from "../../../Redux/state";
import {Post} from "./Post/Post";


type propsType = {
    posts: Array<PostType>
    newPostMessage: string
    dispatch: (action: ActionsType) => void
}
export const MyPost = (props: propsType) => {
    let postsNew = props.posts.map((pos) => {
        return (
            <Post message={pos.post} like={pos.like}/>
        )
    })

    let addPost = () => {
        props.dispatch(addPostAC(props.newPostMessage))
    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(textNewTextAC(e.currentTarget.value))
    }

    return (
        <div className={classes.profile}>
            <div>My Post</div>
            <div>
                <textarea value={props.newPostMessage} onChange={onPostChange} ></textarea>
                <button onClick={addPost}>Add text</button>
            </div>
            {postsNew}
        </div>
    )
}