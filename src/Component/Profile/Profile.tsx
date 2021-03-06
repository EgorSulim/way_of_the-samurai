import classes from "./MyPosts/MyPost.module.css"
import React from "react";
import {MyPostContainer} from "./MyPosts/MyPostContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type PropsType = {
    profile: {
        userId: string
        lookingForAJob: boolean
        lookingForAJobDescription: string
        fullName: string
        contacts: {
            github: string
            vk: string
            facebook: string
            instagram: string
            twitter: string
            website: string
            youtube: string
            mainLink: string
        }
        photos: {
            small: string
            large: string
        }
    }
}

export const Profile = (props: PropsType) => {

    return (
        <div className={classes.profile}>
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer/>
        </div>
    )
}
