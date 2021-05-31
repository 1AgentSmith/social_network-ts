import React from 'react';
import p from './MyPosts.module.css'
import Post from '../Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                New post
            </div>
            <Post/>
        </div>
    )
}
export default MyPosts