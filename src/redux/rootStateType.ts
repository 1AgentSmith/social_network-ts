import {addPostAC} from './profileReducer';
import {
    sendDialogMessageAC,
} from './dialogsReducer';
import {followAC, setUsersAC, unfollowAC} from './usersReducer';
import {DialogsPageType} from '../components/Dialogs/Dialogs';


export type ActionsTypes =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof sendDialogMessageAC> |
    ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> |
    ReturnType<typeof setUsersAC>


export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: any
}

// profilePage type
export type PostDataType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    postData: Array<PostDataType>
}


