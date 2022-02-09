import {UsersPropsType} from './UsersContainer';
import styles from './Users.module.css'
import {v1} from 'uuid';
import userImage from '../../assets/user_image.png'
import axios from 'axios';

export const Users = (props: UsersPropsType) => {
    /*
        if (props.users.users.length === 0) {
            props.setUsers([
                {
                    id: v1(),
                    fullName: 'Valerii',
                    status: 'Gg',
                    location: {city: 'Los Angeles', country: 'USA'},
                    follow: true,
                    avatar: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg'
                },
                {
                    id: v1(),
                    fullName: 'Vlad',
                    status: 'Gg',
                    location: {city: 'Kharkov', country: 'Ukraine'},
                    follow: false,
                    avatar: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg'
                }
            ])
        }
    */

    const getUsers = () => {
        if (props.users.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                debugger
                props.setUsers(response.data.items)
            })
        }
    }
    return <div>
        <button onClick={getUsers}>Get users</button>
        {props.users.users.map(m => <div key={m.id} className={styles.mainBlock}>
            <span>
                <img src={m.photos.small == null ? userImage : userImage} className={styles.userPhoto}/>
                <div className={styles.buttonFollow}>
                    {m.followed
                        ? <button onClick={() => {
                            props.unfollow(m.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(m.id)
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