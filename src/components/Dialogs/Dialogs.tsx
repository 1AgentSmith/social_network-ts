import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {StoreType} from '../../redux/rootStateType';
import {sendDialogMessageAC, updateNewMessageBodyAC} from '../../redux/state';

type DialogsPropsType = {
    store: StoreType
}


const Dialogs = (props: DialogsPropsType) => {
    let state = props.store.getState().dialogsPage
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message}/>)
    let newMessageBody = state.newMessageBody
    let onSendClickHandler = () => {
        props.store.dispatch(sendDialogMessageAC())
    }

    let onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.store.dispatch(updateNewMessageBodyAC(body))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea
                        placeholder="Enter your message"
                        value={newMessageBody}
                        onChange={onChangeHandler}>g</textarea></div>
                    <div>
                        <button onClick={onSendClickHandler}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs