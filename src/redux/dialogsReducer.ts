import {ActionsTypes} from './rootStateType';
import {v1} from 'uuid';


const SEND_DIALOG_MESSAGE = 'SEND_DIALOG_MESSAGE'
export type MessagesType = {
    id: string
    message: string
}
export type DialogsType = {
    name: string
    id: string
}

export type InitialStateType = typeof initialState

let initialState = {
    dialogs: [
        {name: 'Valery', id: v1()},
        {name: 'Vlad', id: v1()},
        {name: 'Aleksandra', id: v1()},
    ] as Array<DialogsType>,
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'Yo'},
    ] as Array<MessagesType>,
}

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes) : InitialStateType=> {
    switch (action.type) {
        case SEND_DIALOG_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: v1(), message: action.newMessageTitle}]
            }
        }
        default:
            return state
    }

}

export const sendDialogMessageAC = (newMessageTitle: string) => {
    return {
        type: SEND_DIALOG_MESSAGE, newMessageTitle
    } as const
}