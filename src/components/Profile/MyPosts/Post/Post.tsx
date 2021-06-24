import React from 'react';
import s from './Post.module.css'

type PostType = {
    message: string,
    likesCount: number,
}

const Post:React.FC<PostType> = (props) => {
    return (
        <div className={s.post}>
            <div className={s.item}>
                <img src="https://cdn.optipic.io/site-539/upload/iblock/3cf/3cf9c4690bf2010f649a0ad35d80763f.jpg"/>
                {props.message}
                <div>
                    <span>like {props.likesCount}</span>
                </div>
            </div>
        </div>
    )
}
export default Post