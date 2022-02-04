import React from 'react';
import s from './dialogItem.module.css'
import userPhoto from '../../../assets/images/user.png'
import { NavLink, Redirect, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth } from '../../../redux/auth-selectors';
import { getListOfMesThunk } from '../../../redux/dialogs-reducer';
import { getDialogs } from '../../../redux/dialogs-selectors';
import DialogList, { DialogListCOntainer } from '../DialogListWithUser/DialogList';




type PropsType = {
    id:number
    userName: string
    lastDialogActivityDate: string
    lastUserActivityDate: string
    smallPhoto: string | null
    hasNewMessages: boolean 
}

const DialogItem: React.FC<PropsType > = (props) => {
    const has = props.hasNewMessages
    const isAuth = useSelector(selectIsAuth)
    const dispatch = useDispatch()
    



    const getMessages = () => {
      if(isAuth){
      dispatch(getListOfMesThunk(props.id))
    }
		else {return<Redirect to='/login'/>}
    }



    if(has === false ){
    return <NavLink onClick={getMessages} to={`/dialogs/${props.id}/messages`} className={s.wrapper__notActive}>
         <div className={s.photo}><img src={props.smallPhoto != null ? props.smallPhoto : userPhoto}/></div>
         <div className={s.name}>{props.userName}</div>
         <div className={s.wrapper__time}>
             <div className={s.date__dialog}>Last message:  {props.lastDialogActivityDate}</div>
             <div className={s.date__user}>Was online:  {props.lastUserActivityDate}</div>
         </div>
    </NavLink>}  
    return (<NavLink onClick={getMessages}  to={`/dialogs/${props.id}/messages`} className={s.wrapper__Active}>
         <div className={s.photo}><img src={props.smallPhoto != null ? props.smallPhoto : userPhoto}/></div>
         <div className={s.name}>{props.userName}</div>
         <div className={s.wrapper__time}>
            <div className={s.date__dialog}>Last message:  {props.lastDialogActivityDate}</div>
             <div className={s.date__user}>Was online:  {props.lastUserActivityDate}</div>
         </div>
    </NavLink>)
}

export default DialogItem;


