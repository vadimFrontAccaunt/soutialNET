import { Field, Form, Formik } from "formik";
import React, { useState }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { dialogsAPI } from "../../../api/dialogs-api";
import { sendMessage } from "../../../redux/chat-reducer";
import {  sendMyMessageThunk } from "../../../redux/dialogs-reducer";
import { getDialogs, getListOfMessages, getMessagerId } from "../../../redux/dialogs-selectors";
import s from "./dialogList.module.css"
import ListItem from "./ListItem";
import userPhoto from '../../../assets/images/user.png'



type DialogPropsType = {
	photo: string | null
	name: string
}

type userSearchFormType = {
	message: string
}

const userSearchFormValidate = (values:any) => {
         const errors = {};
         return errors;
       }

const DialogList: React.FC<DialogPropsType> = (props) => {
	const List = useSelector(getListOfMessages)
	const userId = useSelector(getMessagerId)
	console.log(userId)


	const dispatch = useDispatch()

	const submit = (values: userSearchFormType,{ setSubmitting } : {setSubmitting: (setSubmitting: boolean) => void}) => {
		dispatch(sendMyMessageThunk(userId, values.message))
		setSubmitting(false)
   }
	
	return(<div className={s.wrapper}>
		<div className={s.con}><span className={s.thecSpan}>Dialog with:</span><span className={s.mainSpan}>{props.name}</span><img src={props.photo != null ? props.photo : userPhoto}/></div>
		<div className={s.wrapper__messages}>{List.map(l => <ListItem
					message = {l.body}
					addedAt = {l.addedAt}
					id = {l.senderId}
		/>)}		
		</div>

		<Formik
       initialValues={{ message:''}}
       validate={userSearchFormValidate}
       onSubmit={submit}
		 className={s.formWrap}
     >
       {({ isSubmitting }) => (
         <Form>
           <Field className={s.field} type="text" name="message" />
           <button  className={s.but} type="submit" disabled={isSubmitting}>
             Send
           </button>
         </Form>
       )}
     </Formik>

	</div>)
}

export default DialogList



export const DialogListCOntainer = () => {
	const dialogs = useSelector(getDialogs)
	const userIdFromReducer = useSelector(getMessagerId) //нужно отображать только тот массив, в котором совпадают айди с этим значением

	for(let i = 0; i < dialogs.length; i++){
		if(dialogs[i].id === userIdFromReducer){
			 const phot = dialogs.map(d => (d.photos.small))
			 const name = dialogs.map(d=>(d.userName))
	const photo = phot[i]
	const userName = name[i]
				return(
				 <div>
                     <DialogList
                               name = {userName}    
                               photo = {photo} 
                     />
                
            </div>)
		} 
	}
	return <></>
}