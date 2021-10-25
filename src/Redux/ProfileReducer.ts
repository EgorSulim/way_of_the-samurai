import {SendMessageAction, UpdateNewMessageBodyActionType} from "./dialogsReducer";


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type PostType = {
    id: number
    post: string | undefined
    like: number
}

export type ActionsType =
    AddPostActionType
    | NewPostTextChangeActionType
    | UpdateNewMessageBodyActionType
    | SendMessageAction

export type ProfilePageType = {
    newPostMessage: string
    posts: Array<PostType>

}

const InitialState: ProfilePageType = {
    newPostMessage: '',
    posts: [
        {id: 1, post: 'React is a good library', like: 4},
        {id: 2, post: 'it-incubator', like: 5},
        {id: 3, post: 'The Samurai way', like: 3}]
}
export const profileReducer = (state: ProfilePageType = InitialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            // let newPost = {
            //     id: 4,
            //     post: 'dsfdf',
            //     like: 1
            // }
            // state.posts.push(newPost)
             //state.newPostMessage = ''
            return {...state,posts:[...state.posts,{id:4,post:state.newPostMessage,like:2}],newPostMessage:''}
        case UPDATE_NEW_POST_TEXT:
            // state.newPostMessage = action.newText
            return {...state,newPostMessage:action.newText}
        default:
            return state
    }
}

type AddPostActionType = ReturnType<typeof addPostAC>
type NewPostTextChangeActionType = ReturnType<typeof updateNewPostTextAC>

export const addPostAC = () => {
    return {
        type: 'ADD-POST',
    } as const
}
export const updateNewPostTextAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}