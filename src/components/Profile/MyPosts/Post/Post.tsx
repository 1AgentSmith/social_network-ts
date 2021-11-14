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
                <img src="https://key0.cc/images/small/147664_88e645644ebbbabd08e59a868914678a.png"/>
                {props.message}
                <div>
                    <span>like {props.likesCount}</span>
                </div>
            </div>
        </div>
    )
}
export default Post