import React from "react";
import { useSelector } from "react-redux";
import { getDialogs } from "../../../redux/dialogs-selectors";
import s from "./dialogList.module.css"

type ListPropsType ={
	message: string
	addedAt: string
	id: number
}

const ListItem:React.FC<ListPropsType> = (props) => {
	const date = props.addedAt

	
	if(props.id === 21599 || 1079) {
		return(<div className={s.MYwrapper__oneMes}>
		<div className={s.MYcontt}>
			<div className={s.MYdate}>{date.substring(0,10)}</div>
			<div className={s.MYtime}>{date.substring(10)}</div>
		</div>
		<div className={s.MYmes}>{props.message}</div>
	</div>)
	}
	return(<div className={s.wrapper__oneMes}>
		<div className={s.mes}>{props.message}</div>
		<div className={s.contt}>
			<div className={s.date}>{date.substring(0,10)}</div>
			<div className={s.time}>{date.substring(10)}</div>
		</div>
	</div>)
}


export default ListItem