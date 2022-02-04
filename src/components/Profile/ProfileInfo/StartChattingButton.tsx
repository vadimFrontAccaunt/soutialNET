import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { startDialogWithUser } from "../../../redux/dialogs-reducer";
import s from './ProfileInfo.module.css';

type PropsTypeButton = {
    userId: number
}


const StartChat: React.FC<PropsTypeButton> = (props:any) => {



    const dispatch = useDispatch()
    const startChat = (userId:number) => {
        console.log(userId)
    dispatch(startDialogWithUser(userId))
}
	if(props.userId != 21599 || 1079) {
    return(<NavLink to={'/dialogs'}><button className={s.chatBut}  onClick={() => startChat(props.userId)}>Start Chatting</button></NavLink>)
	}
	return(<></>)
}

export default StartChat