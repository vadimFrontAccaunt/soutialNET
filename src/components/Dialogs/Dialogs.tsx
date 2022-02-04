import React, { useEffect } from 'react';
import {  getDialogsThunk, InitialStateType} from '../../redux/dialogs-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { getDialogs } from '../../redux/dialogs-selectors';
import DialogItem from './DialogItem/DialogItem';
import { selectIsAuth } from '../../redux/auth-selectors';
import s from './DialogItem/dialogItem.module.css'

type PropsType = {
    dialogsPage: InitialStateType
}

export type NewMessageFormValuesType = {
    newMessageBody: string
}


const Dialogs: React.FC<PropsType> = (props) => {
    const dialogs = useSelector(getDialogs)
    const dispatch = useDispatch()
    const isAuth = useSelector(selectIsAuth)
    
    
    useEffect(() => {
        if(isAuth){
         dispatch(getDialogsThunk())}
    }, [])



    if(useSelector(selectIsAuth)){
    return (
        <div >
            <div>
                     {dialogs.map(d => <DialogItem
                               id = {d.id} // все id пользователей с которыми есть диалог
                               userName = {d.userName}    
                               lastDialogActivityDate = {d.lastDialogActivityDate}
                               lastUserActivityDate = {d.lastUserActivityDate}  
                               smallPhoto = {d.photos.small} 
                               hasNewMessages = {d.hasNewMessages}
                     />)}
                
            </div>
        </div>
    )
} else {return <Redirect to={'/login'}/>}}

export default Dialogs;

 type CountType = {
    
 }

export const CountOfNewMessages:React.FC<CountType> = (props) => {
    const dialogs = useSelector(getDialogs)
    const dispatch = useDispatch()
    const isAuth = useSelector(selectIsAuth)
    
    
    useEffect(() => {
        if(isAuth){
         dispatch(getDialogsThunk())}
    }, [])

    const count = dialogs.map(d => (d.newMessagesCount))
    const countItem = count[0]

    if(useSelector(selectIsAuth)){
    if(countItem === 0){
    return (<></>)
    } else {return (<span className={s.count}>{count}</span>)}} else {return <></>}
}

























