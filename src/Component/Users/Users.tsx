import axios from "axios";
import {initialStateType, UserType} from "../../Redux/userReducer";
import classes from "./Users.module.css";

type UsersPropsType={
    usersPage:initialStateType
    follow: (userId: number) =>void
    unfollow: (userID: number) =>void
    setUsers:(user:UserType)=>void
}

export const Users=(props:UsersPropsType)=>{
    if(props.usersPage.users.length===0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{props.setUsers(response.data.items)})
    }
    return(<div>
        {props.usersPage.users.map((m)=>{
            return(
                 <div>

                     <div><img src={m.photoUrl} className={classes.userPhoto}/>
                         <div>{m.fullName}</div>
                         <div>{m.status}</div>
                     </div>
                     {m.followed? <button onClick={()=>props.follow(m.id)}>follow</button>:<button onClick={()=>props.unfollow(m.id)}>unfollow</button>}
                </div>
            )
        })}
    </div>)
}