import {ActionsType} from "./ProfileReducer";

export type MessagesPageType = {
    messages: Array<MessageType>
    names: Array<NameType>
    newMessageBody: string
}
export type MessageType = {
    message: string
}
export type NameType = {
    id: number
    name: string
}


const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const initialState: MessagesPageType = {
    names: [
        {id: 1, name: 'Egor'},
        {id: 2, name: 'Vlad'},
        {id: 3, name: 'Max'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Kolya'},
    ],
    newMessageBody: '',
    messages: [
        {message: 'I go to the gim'},
        {message: 'we are the champion!!!))'},
        {message: 'we like the react'},
        {message: 'you need a doctor'}
    ]
}


export const dialogsReducer = (state: MessagesPageType=initialState, action: ActionsType): MessagesPageType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.body
            return state
        case 'SEND-MESSAGE':
            let Body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({message: Body})
            return state
        default:
            return state
    }
}

export type UpdateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyAC>
export type SendMessageAction = ReturnType<typeof sendMessageAC>

export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body
    } as const
}
export const sendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE',
    } as const
}