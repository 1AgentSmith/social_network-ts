import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

type MyPostPropsType = {
    postData:Array<postDataType>
}
type postDataType = {
    id: string
    message: string
    likesCount: number
}

const MyPosts = (props:MyPostPropsType) => {

    let postElements = props.postData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}
export default MyPosts