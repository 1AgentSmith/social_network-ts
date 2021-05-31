import React from 'react';
import p from './Profile.module.css'
const Profile = () => {
    return(
        <div className={p.content}>
            <div>
                <img src="https://www.noroctech.com/wp-content/uploads/2020/10/webdes2.jpg"/>
            </div>
            <div>
                ava+ description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className='Posts'>
                    <div className='item'>Post 1</div>
                    <div className='item'>Post 2</div>
                </div>
            </div>
        </div>
    )
}
export default Profile