import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return(
        <div className={s.content}>
            <div className={s.profileImage}>
                <img src="https://www.noroctech.com/wp-content/uploads/2020/10/webdes2.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava+ description
            </div>
        </div>
    )
}
export default ProfileInfo