import {v1} from 'uuid';
import {StoreType} from './rootStateType';
import {profileReducer} from './profileReducer';
import {dialogsReducer} from './dialogsReducer';
import {sidebarReducer} from './sidebarReducer';


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
                {id: v1(), message: 'How are you?'},
                {id: v1(), message: 'Yo'},
            ],
            newMessageBody: '',
        },
        sidebar: {}
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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)

    }
}
/*if (action.type === ADD_POST) {
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
}*/





