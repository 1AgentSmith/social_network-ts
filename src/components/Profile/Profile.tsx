import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsTypes, PostDataType, ProfilePageType} from '../../redux/rootStateType';

type ProfilePropsType = ProfilePageType & {
    postData: Array<PostDataType>
    messageForNewPost: string
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts postData={props.postData}
                     messageForNewPost={props.messageForNewPost}
                     dispatch={props.dispatch}
                     />
        </div>
    )
}
export default Profile