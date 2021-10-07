export type storeType = {
    _state: RootStateType
    subscribe: (observer: () => void) => void
    _renderEntireTree: () => void
    getState: () => RootStateType
    dispatch: (action:ActionsType) => void
}

export type MessageType = {
    message: string
}
export type NameType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    post: string | undefined
    like: number
}
export type ProfilePageType = {
    newPostMessage: string
    posts: Array<PostType>

}
export type MessagesPageType = {
    messages: Array<MessageType>
    names: Array<NameType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}

type AddPostActionType=ReturnType<typeof addPostAC>
type NewPostTextChangeActionType =ReturnType<typeof textNewTextAC>
export type ActionsType=AddPostActionType | NewPostTextChangeActionType

export const addPostAC=(textMessage:string)=>{
    return{
        type:'ADD-POST',
        textMessage:textMessage
    } as const
}
export const textNewTextAC=(newText:string)=>{
    return{
        type:'NEW-POST-TEXT-CHANGE',
        newText:newText
    }as const
}

export const store: storeType = {
    _state: {
        profilePage: {
            newPostMessage: '',
            posts: [
                {id: 1, post: 'React is a good library', like: 4},
                {id: 2, post: 'it-incubator', like: 5},
                {id: 3, post: 'The Samurai way', like: 3}
            ],
        },
        messagesPage: {
            names: [
                {id: 1, name: 'Egor'},
                {id: 2, name: 'Vlad'},
                {id: 3, name: 'Max'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Kolya'},
            ],
            messages: [
                {message: 'I go to the gim'},
                {message: 'we are the champion!!!))'},
                {message: 'we like the react'},
                {message: 'you need a doctor'}
            ]
        }
    },
    subscribe(observer) {
        this._renderEntireTree = observer
    },
    _renderEntireTree() {

    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 4,
                post: action.textMessage,
                like: 1
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostMessage = ''
            this._renderEntireTree()
        } else if (action.type === 'NEW-POST-TEXT-CHANGE') {
            this._state.profilePage.newPostMessage = action.newText
            this._renderEntireTree()
        }
    }
}





