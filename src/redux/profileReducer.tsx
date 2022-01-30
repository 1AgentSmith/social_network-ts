import {ActionsTypes, PostDataType, ProfilePageType} from './rootStateType';
import {v1} from 'uuid';

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initialState = {
    postData: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 0},
        {id: v1(), message: 'It\'s my first post', likesCount: 1}
    ],
    messageForNewPost: '',
} as ProfilePageType

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case ADD_POST: {
            const newPost: PostDataType = {
                id: v1(),
                message: state.messageForNewPost,
                likesCount: 0
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
                messageForNewPost: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, messageForNewPost: action.message}
        }
        default:
            return state
    }
}
export const addPostActionCreator = () => ({
    type: ADD_POST,
}) as const

export const updateNewPostMessageAC = (message: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        message
    } as const
}