import React from 'react';
import {DialogsPageType} from '../../redux/rootStateType';
import {sendDialogMessageAC, updateNewMessageBodyAC} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';




type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchToPropsType = {
    updateNewMessageBody: (body: string)=> void
    sendDialogsMessage: ()=> void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsReducer,
    }
}

const mapDispatchToProps = (dispatch : Dispatch) : MapDispatchToPropsType => {
    return {
        updateNewMessageBody: (body: string)=> {
            dispatch(updateNewMessageBodyAC(body))
        },
        sendDialogsMessage: ()=> {
            dispatch(sendDialogMessageAC())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer