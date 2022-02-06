import React, {ChangeEvent, useState} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsType, MessagesType} from '../../redux/dialogsReducer';

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

type DialogsPropsType = {
    sendDialogsMessage: (title: string) => void
    dialogsPage: DialogsPageType
}
const Dialogs = ({sendDialogsMessage, dialogsPage}: DialogsPropsType) => {
    let [dialogTitle, setDialogTitle] = useState('')
    let dialogsElements = dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    let messagesElements = dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>)

    let onClickHandler = (title: string) => {
        sendDialogsMessage(title)
        setDialogTitle('')
    }
    let onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setDialogTitle(e.currentTarget.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            placeholder="Enter your message"
                            value={dialogTitle}
                            onChange={onChangeHandler}>g
                        </textarea>
                    </div>
                    <div>
                        <button onClick={() => onClickHandler(dialogTitle)}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs