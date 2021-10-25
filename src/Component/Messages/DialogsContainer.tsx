import React, {ChangeEvent} from "react";
import {ActionsType} from "../../Redux/ProfileReducer";
import {MessagesPageType, sendMessageAC, updateNewMessageBodyAC} from "../../Redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect, MapStateToProps} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";

// type PropsType = {
//     dialogsPage: MessagesPageType
//     dispatch: (action: ActionsType) => void
// }


type mapDispatchPropsType = {
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void
}

type MapStateToPropsType = {
    dialogsPage: MessagesPageType
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch:any):mapDispatchPropsType => {
    return {
        updateNewMessageBody: (body: string) => dispatch(updateNewMessageBodyAC(body)),
        sendMessage: () => dispatch(sendMessageAC())
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)