import React from "react";

export type ActionType =
    followActionType
    | unFollowActionType
    | setUsersActionType
    | setCurrentPageActionType
    | setTotalCountActionType
    | toggleIsFetchingActionType


export type UserType = {
    id: number
    name: string
    status: string
    followed: boolean
    location: { city: string, country: string }
    photos:{
        small:string
        large:string
    }
}

export type initialStateType = {
    users: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching:boolean
}

let initialState = {
    users: [],
    pageSize: 20,
    totalCount: 0,
    currentPage: 1,
    isFetching:false
}

export const usersReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case 'UNFOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case 'SET-USERS':
            return {...state, users: action.users}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.pageNumber}
        case "SET-TOTAL-COUNT":
            return {...state, totalCount: action.totalCount}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}


export type followActionType = ReturnType<typeof followAC>
export type unFollowActionType = ReturnType<typeof unFollowAC>
export type setUsersActionType = ReturnType<typeof setUsersAC>
export type setCurrentPageActionType = ReturnType<typeof setCurrentPageAC>
export type setTotalCountActionType = ReturnType<typeof setTotalCountAC>
export type toggleIsFetchingActionType=ReturnType<typeof toggleIsFetchingAC>

export const setTotalCountAC = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-COUNT',
        totalCount
    } as const
}

export const setCurrentPageAC = (pageNumber: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        pageNumber
    } as const
}

export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId
    } as const
}
export const unFollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId
    } as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}
export const toggleIsFetchingAC = (isFetching:boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching
    } as const
}
