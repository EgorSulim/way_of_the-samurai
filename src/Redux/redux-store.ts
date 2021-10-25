import {combineReducers, createStore } from "redux";
import {profileReducer} from "./ProfileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./userReducer";

export type AppRootStateType=ReturnType<typeof rootReducer>

const rootReducer=combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    usersPage:usersReducer
})



export const store=createStore(rootReducer)

//@ts-ignore
window.store = store;