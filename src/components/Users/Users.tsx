import {UsersPropsType} from './UsersContainer';
import styles from './Users.module.css'
import {v1} from 'uuid';
import userImage from '../../assets/user_image.png'
import axios from 'axios';
import React from 'react';


export class Users extends React.Component<UsersPropsType>{
    constructor(props:UsersPropsType) {
        super(props);
            if (this.props.users.users.length === 0) {
                axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                    debugger
                    this.props.setUsers(response.data.items)
                })
            }
    }
    render() {
        return <div>
            {this.props.users.users.map(m => <div key={m.id} className={styles.mainBlock}>
            <span>
                <img src={m.photos.small == null ? userImage : userImage} className={styles.userPhoto}/>
                <div className={styles.buttonFollow}>
                    {m.followed
                        ? <button onClick={() => {
                            this.props.unfollow(m.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            this.props.follow(m.id)
                        }}>Follow</button>}
                </div>
            </span>
                <div className={styles.rightSide}>
                    <div className={styles.nameAndStatus}>
                        <div>{m.name}</div>
                        <div className={styles.status}>{m.status}</div>
                    </div>
                    <div className={styles.cityAndCountry}>
                        <div>{'m.location.country'}</div>
                        <div className={styles.city}>{'m.location.city'}</div>
                    </div>
                </div>
            </div>)}
        </div>
    }
}