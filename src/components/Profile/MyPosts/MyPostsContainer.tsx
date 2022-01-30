import React from 'react';

import {PostDataType, RootStateType} from '../../../redux/rootStateType';
import {addPostActionCreator, updateNewPostMessageAC} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppStateType} from '../../../redux/redux-store';



type MapStateToPropsType= {
    posts: Array<PostDataType>,
    messageForNewPost: string
}
type MapDispatchToPropsType = {
    updateNewPostText: (title: string)=> void
    addPost: ()=> void
}

export type MyPostType = MapStateToPropsType | MapDispatchToPropsType


let mapStateToProps = (state: AppStateType) : MapStateToPropsType=> {
    return {
        posts: state.profileReducer.postData,
        messageForNewPost: state.profileReducer.messageForNewPost
    }
}
let mapDispatchToProps = (dispatch: Dispatch) :MapDispatchToPropsType=> {
    return {
        updateNewPostText:(title: string)=> dispatch(updateNewPostMessageAC(title)),
        addPost: ()=>dispatch(addPostActionCreator())
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostContainer