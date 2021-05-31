import React from 'react';
import p from './Post.module.css'

const Post = () => {
    return (
            <div className={p.posts}>
                <div className={p.item}>Post 1</div>
                <div className={p.item}>Post 2</div>
            </div>
    )
}
export default Post