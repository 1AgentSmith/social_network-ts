import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type DialogItemPropsType = {
    name: string,
    id: number,
}
const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    return (
        <div>
            <div className={s.dialog}>
                <NavLink
                    to={'/dialogs/' + props.id}
                    activeClassName={s.active}>{props.name}
                </NavLink>
            </div>
        </div>
    )
}
type MessagePropsType = {
    message: string,
}
const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div>
            <div className={s.message}>{props.message}</div>
        </div>
    )
}


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Valerii" id={1}/>
                <DialogItem name="Vlad" id={2}/>
                <DialogItem name="Aleksandra" id={3}/>
                <DialogItem name="Julia" id={4}/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How is your it-kamasutra"/>
                <Message message="Yo"/>
            </div>
        </div>
    )
}

export default Dialogs