import React from "react";
import {Dispatch} from "redux"
import {addPostAC, PostType, updateNewPostTextAC} from "../../../Redux/profileReducer";
import {MyPost} from "./MyPost";
import {AppRootStateType} from "../../../Redux/redux-store";
import {connect} from "react-redux";


// type propsType = {
//    // store:AppRootStateType
// }
// export const MyPostContainer = (props: propsType) => {
//  let state=props.store.getState()
//     const addPost = () => {
//         props.store.dispatch(addPostAC(props.newPostMessage))
//     }
//     const onPostChange = (text:string) => {
//         props.store.dispatch(updateNewPostTextAC(text))
//     }
//
//     return (
//         <MyPost posts={props.store.getSate().posts} updateNewPostText={onPostChange} addPost={addPost}
//         newPostText={state.profilePage.newPostText}/>
//     )
// }

type MapStateToPropsType={
    posts:Array<PostType>
    newPostMessage:string
}

type MapDispatchToProps={
    updateNewPostText:(text:string)=>void
    addPost:()=>void
}

const mapStateToProps=(state:AppRootStateType):MapStateToPropsType=>{
    return{
        posts:state.profilePage.posts,
        newPostMessage:state.profilePage.newPostMessage
    }
}

const mapDispatchToProps=(dispatch:Dispatch):MapDispatchToProps=>{
    return {
        updateNewPostText:(text)=>{dispatch(updateNewPostTextAC(text))},
        addPost:()=>dispatch(addPostAC())
    }
}

export const MyPostContainer=connect(mapStateToProps,mapDispatchToProps)(MyPost)