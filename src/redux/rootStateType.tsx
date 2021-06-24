export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType

}
// profilePage type
export type PostDataType = {
    id: string
    message: string
    likesCount: number
}
export type ProfilePageType = {
    postData: Array<PostDataType>
}
//messagePage type
export type MessagesDataType = {
    id: string
    message: string
}
export type DialogsDataType = {
    name: string
    id: string
}
export type MessagesPageType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}