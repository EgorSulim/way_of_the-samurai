import {connect} from "react-redux";
import {Users} from "./Users";
import {AppRootStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {followAC, initialStateType, setUsersAC, unFollowAC, UserType} from "../../Redux/userReducer";


type MapStateToPropsType ={
    usersPage:initialStateType
}

type MapDispatchToPropsType ={
    follow: (userId: number) =>void
    unfollow: (userID: number) =>void
    setUsers:(user:UserType)=>void
}

const mapStateToProps = (state: AppRootStateType):MapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return {
        follow: (userId: number) => dispatch(followAC(userId)),
        unfollow: (userID: number) => dispatch(unFollowAC(userID)),
        setUsers:(user:UserType)=>dispatch(setUsersAC(user))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)