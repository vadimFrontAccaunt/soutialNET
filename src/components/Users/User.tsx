import React from 'react'
import s from './users.module.css'
import userPhoto from '../../assets/images/user.png'
import {NavLink} from 'react-router-dom'
import {UserType} from '../../types/types'

type PropsType = {
    user: UserType
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

const User: React.FC<PropsType> = ({user, followingInProgress, unfollow, follow}) => {

    return (
        <div className={s.user}>
                <span>
                    <div>
                       <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                             className={s.userPhoto}/>
                       </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button className={s.find_button1} disabled={followingInProgress
                                .some(id => id === user.id)}
                                      onClick={() => {
                                          unfollow(user.id)
                                      }}>
                                Unfollow</button>
                            : <button className={s.find_button1} disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          follow(user.id)
                                      }}>
                                Follow</button>}

                    </div>
                </span>
            <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'user.location.country'}</div>
                        <div>{'user.location.city'}</div>
                    </span>
                </span>
        </div>)
}

export default User
