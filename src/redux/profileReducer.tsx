import {ActionsTypes, PostDataType, ProfilePageType} from './rootStateType';
import {v1} from 'uuid';

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
export const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {


    switch (action.type) {
        case ADD_POST:
            const newPost: PostDataType = {
                id: v1(),
                message: action.postText,
                likesCount: 0
            }

            state.postData.unshift(newPost)
            state.messageForNewPost = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.messageForNewPost = action.message
            return state
        default:
            return state
    }

    /*    if (action.type === ADD_POST) {
            const newPost: PostDataType = {
                id: v1(),
                message: action.postText,
                likesCount: 0
            }

            state.postData.unshift(newPost)
            state.messageForNewPost = ''
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            state.messageForNewPost = action.message
        }
        return (
            state
        )*/
}
export const addPostActionCreator = (postText: string) => ({
    type: ADD_POST,
    postText: postText
}) as const

export const updateNewPostMessageAC = (message: string) => {
    return ({
        type: UPDATE_NEW_POST_TEXT,
        message: message
    }) as const
}