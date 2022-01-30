import {UsersPropsType} from './UsersContainer';
import styles from './Users.module.css'
import {v1} from 'uuid';

export const Users = (props: UsersPropsType) => {
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

    return <div>
        {props.users.users.map(m => <div key={m.id} className={styles.mainBlock}>
            <span>
                <img src={m.avatar} className={styles.userPhoto}/>
                <div className={styles.buttonFollow}>
                    {m.follow
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
                    <div>{m.fullName}</div>
                    <div className={styles.status}>{m.status}</div>
                </div>
                <div className={styles.cityAndCountry}>
                    <div>{m.location.country}</div>
                    <div className={styles.city}>{m.location.city}</div>
                </div>
            </div>
        </div>)}
    </div>
}