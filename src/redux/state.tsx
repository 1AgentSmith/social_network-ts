import {v1} from 'uuid';
import {PostDataType, StoreType} from './rootStateType';

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_DIALOG_MESSAGE = 'SEND_DIALOG_MESSAGE'

export let store: StoreType = {
    _state: {
        profilePage: {
            postData: [
                {id: v1(), message: 'Hi, how are you?', likesCount: 0},
                {id: v1(), message: 'It\'s my first post', likesCount: 1}
            ],
            messageForNewPost: '',
        },
        dialogsPage: {
            dialogs: [
                {name: 'Valery', id: v1()},
                {name: 'Vlad', id: v1()},
                {name: 'Aleksandra', id: v1()},
            ],
            messages: [
                {id: v1(), message: 'Hi'},
                {id: v1(), message: 'How is your it-kamasutra'},
                {id: v1(), message: 'Yo'},
            ],
            newMessageBody: '',
        }
    },
    _callSubscriber() {
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost: PostDataType = {
                id: v1(),
                message: action.postText,
                likesCount: 0
            }

            this._state.profilePage.postData.unshift(newPost)
            this._state.profilePage.messageForNewPost = ''
            console.log(this._state.profilePage.postData)
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.messageForNewPost = action.message
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber(this._state)
        } else if (action.type === SEND_DIALOG_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({id: v1(), message: body})
            this._callSubscriber(this._state)
        }
    }
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

export const sendDialogMessageAC = () => {
    return ({
        type: SEND_DIALOG_MESSAGE,
    }) as const
}

export const updateNewMessageBodyAC = (body: string) => {
    return ({
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }) as const
}


