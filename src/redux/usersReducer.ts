import {ActionsTypes} from './rootStateType';


let initialState : InitialStateType= {
    users: []
}
export type UserType = {
    name: string
    id: number
    uniqueUrlName: null
    photos: {
        small: null
        large: null
    }
    status: string
    followed: boolean

}
export type InitialStateType = {
   // users: Array<UserType>
    users: Array<UserType>
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: state.users.map(m => m.id === action.userID ? {...m, follow: true} : m),
            }
        }
        case 'UNFOLLOW': {
            return {
                ...state,
                users: state.users.map(m => m.id === action.userID ? {...m, follow: false} : m)
            }
        }
        case 'SET-USERS': {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}
export const followAC = (userID: number) => ({
    type: 'FOLLOW',
    userID
}) as const

export const unfollowAC = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        userID
    } as const
}

export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}