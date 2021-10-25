import React from "react";

export type ActionType = followActionType | unFollowActionType | setUsersActionType


export type UserType={
    id:number
    fullName:string
    status:string
    followed: boolean
    location: {city: string, country: string}
    photoUrl:string
}

export type initialStateType={
    users:Array<UserType>
}

let initialState = {
    users: [
        {   photoUrl:'https://www.blast.hk/attachments/64805/',
            id: 1,
            fullName: 'Dmitry',
            status: 'i am a boss',
            followed: true,
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {photoUrl:'https://www.blast.hk/attachments/64805/',
            id: 2,
            fullName: 'Viktor',
            status: 'i am a boss',
            followed: false,
            location: {city: 'Moscow', country: 'Russia'}
        },
        {id: 3,photoUrl:'https://www.blast.hk/attachments/64805/', fullName: 'Sasha', status: 'i am a boss', followed: true, location: {city: 'Kiev', country: 'Ukraine'}}
    ]
}

export const usersReducer = (state: initialStateType = initialState, action: ActionType):initialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case 'UNFOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case 'SET-USERS':
            return {...state, users: [...state.users,action.user]}
        default:
            return state
    }
}


export type followActionType = ReturnType<typeof followAC>
export type unFollowActionType = ReturnType<typeof unFollowAC>
export type setUsersActionType = ReturnType<typeof setUsersAC>

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
export const setUsersAC = (user:UserType ) => {
    return {
        type: 'SET-USERS',
        user
    } as const
}
