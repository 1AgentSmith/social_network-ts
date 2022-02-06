import {
    dialogsReducer,
    InitialStateType, sendDialogMessageAC,
} from './dialogsReducer';
import {v1} from 'uuid';


test('new message on dialogs should be send' , () => {
    let startState : InitialStateType = {
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
    }

    let endState = dialogsReducer(startState, sendDialogMessageAC('gg'))

    expect(endState.messages[2].message).toBe('Yo')
    expect(endState.messages[3].message).toBe('gg')

})