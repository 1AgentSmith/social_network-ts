import {ActionsTypes, DialogsPageType} from './rootStateType';
import {v1} from 'uuid';


const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_DIALOG_MESSAGE = 'SEND_DIALOG_MESSAGE'
export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_DIALOG_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: v1(), message: body})
            return state
        default:
            return state
    }

    /*    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            state.newMessageBody = action.body
        } else if (action.type === SEND_DIALOG_MESSAGE) {
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: v1(), message: body})
        }
        return (
            state
        )*/
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