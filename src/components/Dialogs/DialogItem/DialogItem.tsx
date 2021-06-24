import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type DialogItemPropsType = {
    name: string,
    id: string,
}


export const DialogItem: React.FC<DialogItemPropsType> = (props) => {
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