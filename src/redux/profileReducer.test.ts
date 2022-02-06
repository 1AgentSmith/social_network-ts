import {ProfilePageType} from './rootStateType';
import {v1} from 'uuid';
import {addPostAC, profileReducer} from './profileReducer';

test('Should be added new post', () => {
    let startState: ProfilePageType = {
        postData: [
            {id: v1(), message: 'Hi, how are you?', likesCount: 0},
            {id: v1(), message: 'It\'s my first post', likesCount: 1}
        ],
    }

    let endState = profileReducer(startState, addPostAC('gg'))

    expect(endState.postData[0].message).toBe('Hi, how are you?')
    expect(endState.postData[1].message).toBe('It\'s my first post')
    expect(endState.postData[2].message).toBe('gg')
})