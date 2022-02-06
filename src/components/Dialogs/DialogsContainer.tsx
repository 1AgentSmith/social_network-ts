import {sendDialogMessageAC} from '../../redux/dialogsReducer';
import Dialogs, {DialogsPageType} from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';




type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchToPropsType = {
    sendDialogsMessage: (newMessageBody: string)=> void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch : Dispatch) : MapDispatchToPropsType => {
    return {
        sendDialogsMessage: (newMessageBody: string)=> {
            dispatch(sendDialogMessageAC(newMessageBody))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer