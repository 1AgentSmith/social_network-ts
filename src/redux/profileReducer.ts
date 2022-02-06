import {ActionsTypes, PostDataType, ProfilePageType} from './rootStateType';
import {v1} from 'uuid';

const ADD_POST = 'ADD_POST'

let initialState = {
    postData: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 0},
        {id: v1(), message: 'It\'s my first post', likesCount: 1}
    ],
    messageForNewPost: '',
} as ProfilePageType

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {

    switch (action.type) {
        case ADD_POST: {
            const newPost: PostDataType = {
                id: v1(),
                message: action.newTitlePostMessage,
                likesCount: 0
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
            }
        }

        default:
            return state
    }
}
export const addPostAC = (newTitlePostMessage: string) => ({
    type: ADD_POST, newTitlePostMessage
}) as const
