import axios from "axios";
import {initialStateType, UserType} from "../Redux/userReducer";

type GetUsersPropsType = {
    usersPage: initialStateType
    users: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
}

const instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "e8421c8d-f20b-4037-99e1-c0e74f0f447b"},
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
})

export const getUsers = (props: GetUsersPropsType) => {
    return instance.get(`users?page=${props.currentPage}&count=${props.pageSize}`)
}

export const followApi = (props: GetUsersPropsType) => {
    return instance.get(`users?page=${props.currentPage}&count=${props.pageSize}`)
}
