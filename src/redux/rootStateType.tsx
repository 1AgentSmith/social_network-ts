import {addPostActionCreator, updateNewPostMessageAC} from './profileReducer';
import {sendDialogMessageAC, updateNewMessageBodyAC} from './dialogsReducer';




export type ActionsTypes =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewPostMessageAC> |
    ReturnType<typeof updateNewMessageBodyAC> |
    ReturnType<typeof sendDialogMessageAC>


export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: any
}

// profilePage type
export type PostDataType = {
    id: string
    message: string
    likesCount: number
}
export type ProfilePageType = {
    postData: Array<PostDataType>
    messageForNewPost: string
}


//dialogsPage type
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: newMessageBodyType
}

export type MessagesType = {
    id: string
    message: string
}
export type DialogsType = {
    name: string
    id: string
}
export type newMessageBodyType = string
//sideBar type


