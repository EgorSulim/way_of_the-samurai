import React from "react";

type ActionsType = SetUserDataActionType

let initialState = {
    isAuth: true,
    data: {
        email: '',
        login: 'samurai',
        userId: 2

    }
}
export type HeaderStateType = {
    isAuth: boolean
    data: {
        userId: number
        login: string,
        email: string,
    }
}

export const authReducer = (state: HeaderStateType = initialState, action: ActionsType): HeaderStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {...state, data:action.data}
        default:
            return state
    }
}

export type SetUserDataActionType = ReturnType<typeof setUserDataAC>

export const setUserDataAC = (userId: number, login: string, email: string) => {
    return {
        type: 'SET-USER-DATA',
        data: {
            userId,
            email,
            login
        }
    } as const
}

