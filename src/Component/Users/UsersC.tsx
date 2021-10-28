import React from "react";
import classes from "./Users.module.css";
import {initialStateType, UserType} from "../../Redux/userReducer";
import axios from "axios";

type UsersPropsType={
    usersPage:initialStateType
    follow: (userId: number) =>void
    unfollow: (userID: number) =>void
    setUsers:(user:UserType)=>void
}

export class Users extends React.Component<UsersPropsType>{

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{this.props.setUsers(response.data.items)})
    }

    render() {
        return <div>
            {this.props.usersPage.users.map((m)=>{
                return(
                    <div>

                        <div><img src={m.photoUrl} className={classes.userPhoto}/>
                            <div>{m.fullName}</div>
                            <div>{m.status}</div>
                        </div>
                        {m.followed? <button onClick={()=>this.props.follow(m.id)}>follow</button>:<button onClick={()=>this.props.unfollow(m.id)}>unfollow</button>}
                    </div>
                )
            })}
        </div>
    }

}