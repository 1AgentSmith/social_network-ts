import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostDataType} from '../../redux/rootStateType';

type ProfilePropsType = {
    postData: Array<PostDataType>
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>
        </div>
    )
}
export default Profile