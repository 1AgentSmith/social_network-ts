import {PostDataType} from '../../../redux/rootStateType';
import {addPostAC} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppStateType} from '../../../redux/redux-store';



type MapStateToPropsType= {
    posts: Array<PostDataType>,
}
type MapDispatchToPropsType = {
    addPost: (messageForNewPost:string)=> void
}



let mapStateToProps = (state: AppStateType) : MapStateToPropsType=> {
    return {
        posts: state.profilePage.postData,
    }
}
let mapDispatchToProps = (dispatch: Dispatch) :MapDispatchToPropsType=> {
    return {
        addPost: (newTitlePostMessage:string)=>dispatch(addPostAC(newTitlePostMessage))
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostContainer