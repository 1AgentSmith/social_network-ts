import {v1} from 'uuid';
import {RootStateType} from './rootStateType';


export let state: RootStateType = {
    profilePage: {
        postData: [
            {id: v1(), message: 'Hi, how are you?', likesCount: 0},
            {id: v1(), message: 'It\'s my first post', likesCount: 1}
        ]
    },
    messagesPage: {
        dialogsData: [
            {name: 'Valerii', id: v1()},
            {name: 'Vlad', id: v1()},
            {name: 'Aleksandra', id: v1()},
            {name: 'Julia', id: v1()}
        ],
        messagesData: [
            {id: v1(), message: 'Hi'},
            {id: v1(), message: 'How is your it-kamasutra'},
            {id: v1(), message: 'Yo'},
        ]
    }
}

