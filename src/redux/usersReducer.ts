import {ActionsTypes} from './rootStateType';


let initialState : InitialStateType= {
    users: []
}
export type UserType = {
    id: string
    fullName: string
    status: string
    location: { city: string, country: string }
    follow: boolean
    avatar: string
}
export type InitialStateType = {
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
export const followAC = (userID: string) => ({
    type: 'FOLLOW',
    userID
}) as const

export const unfollowAC = (userID: string) => {
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