import { allmessageType, DialogType } from '../redux/dialogs-reducer';
import {instance, APIResponseType} from './api';




export const dialogsAPI = {
	getDialogs(){ // get all dialogs
		return instance.get<Array<DialogType>>(`dialogs`).then(res => res.data)
	},
	statrDialogWithUser(userId:number){  
		return instance.put<APIResponseType>(`dialogs/${userId}`).then(res => res.data)
	},
	getDialogWithUser(userId:number, page:number = 1, count:number = 10){ // get list of messages with your friend
		return instance.get<allmessageType>(`dialogs/${userId}/messages?page=${page}&count=${count}`).then(res => res.data)
	},
	sendMessageToUser(userId:number, body:string){
		return instance.post<APIResponseType>(`dialogs/${userId}/messages`, {body}).then(res => res.data)
	},
}