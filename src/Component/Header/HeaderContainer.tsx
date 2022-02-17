import {Header} from "./Header";
import React from "react";
import {AppRootStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import axios from "axios";
import {setUserDataAC} from "../../Redux/authReducer";


type MapStateToPropsType = {
    isAuth: boolean
    data: {
        userId: number
        email: string
        login: string
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    data:state.auth.data
})



class HeaderContainer extends React.Component<any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials:true})
            .then(res=> {
                if (res.data.resultCode === 0) {
                    debugger
                    let {id,login,email}=res.data.data
                    this.props.setUserData(id,login,email)
                }
            })
    }

    render() {
        return (
                <Header {...this.props} data={this.props.data}/>
        );
    }
}

export default connect(mapStateToProps,{setUserData:setUserDataAC})(HeaderContainer)