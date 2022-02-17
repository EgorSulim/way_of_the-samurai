import React from "react";
import {setUserProfileAC} from "../../Redux/ProfileReducer";
import axios from "axios";
import {Profile} from "./Profile";
import {AppRootStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";


type MapStateToPropsType = {
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

const mapStateToProps = (state: AppRootStateType):MapStateToPropsType=> ({
    profile:state.profilePage.profile
})

export class ProfileContainers extends React.Component<any> {
    componentDidMount() {
        let userID=this.props.match.params.userId
        if(!userID){userID=3}
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userID)
            .then(response => {
                this.props.setUserProfile(response.data)})
    }

    render() {

        return (<>
                <Profile {...this.props} profile={this.props.profile} />
            </>
        )
    }
}

let WithUrlDataContainerComponent=withRouter(ProfileContainers)
export const ProfileContainer=connect(mapStateToProps,{setUserProfile:setUserProfileAC})(WithUrlDataContainerComponent)


