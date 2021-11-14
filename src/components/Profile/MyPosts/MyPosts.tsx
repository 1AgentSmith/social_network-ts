import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {ActionsTypes, PostDataType} from '../../../redux/rootStateType';
import {addPostActionCreator, updateNewPostMessageAC} from '../../../redux/profileReducer';

type MyPostPropsType = {
    postData: Array<PostDataType>
    messageForNewPost: string
    dispatch: (action: ActionsTypes) => void
}

const MyPosts = (props: MyPostPropsType) => {

    let postElements = props.postData.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let onAddClickHandler = () => {
        props.dispatch(addPostActionCreator(props.messageForNewPost))
    }
    let onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostMessageAC(e.currentTarget.value))
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.messageForNewPost}
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