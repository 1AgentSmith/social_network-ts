import React, {ChangeEvent, useState} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {PostDataType} from '../../../redux/rootStateType';

type MyPostPropsType = {
    addPost: (messageForNewPost: string) => void
    posts: Array<PostDataType>
}

const MyPosts = (
    {addPost, posts}: MyPostPropsType) => {
    let [postTitle, setPostTitle] = useState('')
    let postElements = posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let onAddClickHandler = (newTitlePostMessage: string) => {
        addPost(newTitlePostMessage)
        setPostTitle('')
        console.log(posts)
    }
    let onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setPostTitle(e.currentTarget.value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={postTitle}
                              onChange={onChangeHandler}
                    >g</textarea>
                </div>
                <div>
                    <button onClick={() => onAddClickHandler(postTitle)}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}
export default MyPosts