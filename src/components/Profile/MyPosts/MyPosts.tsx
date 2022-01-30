import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import { PostDataType} from '../../../redux/rootStateType';
import {AppStateType} from '../../../redux/redux-store';

type MyPostPropsType = {
    updateNewPostText:(title: string)=> void
    addPost:()=> void
    posts: Array<PostDataType>
    messageForNewPost: string
}

const MyPosts = (
    {updateNewPostText, addPost, posts, messageForNewPost, ...props}: MyPostPropsType) => {

    let postElements = posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let onAddClickHandler = () => {
        addPost()
    }
    let onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={messageForNewPost}
                              onChange={onChangeHandler}
                    >g</textarea>
                </div>
                <div>
                    <button onClick={onAddClickHandler}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}
export default MyPosts