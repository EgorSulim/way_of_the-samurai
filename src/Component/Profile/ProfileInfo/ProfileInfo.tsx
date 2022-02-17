import classes from "../MyPosts/MyPost.module.css";
import React from "react";

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

export const ProfileInfo = (props: PropsType) => {
    return <div className={classes.profile}>
        <div className={classes.images}>
            <img src={props.profile.photos.large}/>
        </div>
    </div>
}