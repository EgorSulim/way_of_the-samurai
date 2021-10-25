import React from "react";
//  type storeType = {
//     _state: RootStateType
//     subscribe: (observer: () => void) => void
//     _renderEntireTree: () => void
//     getState: () => RootStateType
//     dispatch: (action: ActionsType) => void
// }
//
//  type PostType = {
//     id: number
//     post: string | undefined
//     like: number
// }
//
//
// type RootStateType = {
//     profilePage: ProfilePageType
//     messagesPage: MessagesPageType
// }
//
//
//
// const store: storeType = {
//     _state: {
//         profilePage: {
//             newPostMessage: '',
//             posts: [
//                 {id: 1, post: 'React is a good library', like: 4},
//                 {id: 2, post: 'it-incubator', like: 5},
//                 {id: 3, post: 'The Samurai way', like: 3}
//             ],
//         },
//         messagesPage: {
//             names: [
//                 {id: 1, name: 'Egor'},
//                 {id: 2, name: 'Vlad'},
//                 {id: 3, name: 'Max'},
//                 {id: 4, name: 'Sasha'},
//                 {id: 5, name: 'Kolya'},
//             ],
//             newMessageBody: '',
//             messages: [
//                 {message: 'I go to the gim'},
//                 {message: 'we are the champion!!!))'},
//                 {message: 'we like the react'},
//                 {message: 'you need a doctor'}
//             ]
//         },
//     },
//     subscribe(observer) {
//         this._renderEntireTree = observer
//     },
//     _renderEntireTree() {
//
//     },
//     getState() {
//         return this._state
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
//         this._renderEntireTree()
//     }
// }
//



