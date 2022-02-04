import { message } from 'antd';
import store, {BaseThunkType, InferActionsTypes} from './redux-store';
import {dialogsAPI} from '../api/dialogs-api'
import { PhotosType } from '../types/types';
import { authAPI } from '../api/auth-api';
import { ResultCodesEnum } from '../api/api';


export type DialogType = {
    id: number
    userName: string
    hasNewMessages:boolean
    lastDialogActivityDate: string
    lastUserActivityDate: string
    newMessagesCount: number
    photos: PhotosType
}

export type AllMessagesRequestType = {
    items: MessageType
    totalCount: number
    error: null | any
}

export type MessageType = {
    id: string
    body: string
    translatedBody: null
    addedAt: string
    senderId: number
    senderName: string
    recipientId: number
    viewed: boolean
}

export type allmessageType = {
    items: Array<MessageType>
    totalCount: number
    error: null | any
}



let initialState = {
    dialogs: [] as Array<DialogType>,
    messages: {
        items: [] as Array<MessageType>,
        totalCount: 0 as number,
        error: null as null | any
    },
    myMessages: "" as string,
    dialogsWith: 0 as number
}

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'GET-DIALOGS' : {
            return {...state, dialogs: action.dialogs}
        }
        case 'GET-LIST-OF-MESSAGE' : {
            return{...state, messages: action.messages }
        }
        case 'SEND-MESSAGE-TO-USER' : {
            return{...state, myMessages: action.myMessages}
        }
        case 'SET-ID' : {
            return {...state, dialogsWith: action.dialogsWith}
        }
        default:
            return state;
    }
}



export const actions = {
    getDialogs:(dialogs: Array<DialogType>) => ({type:'GET-DIALOGS', dialogs} as const),
    getListOfMessage:(messages: allmessageType) => ({type: 'GET-LIST-OF-MESSAGE', messages} as const),
    sendMyMessage:(myMessages: string) => ({type: 'SEND-MESSAGE-TO-USER', myMessages } as const),
    setId:(dialogsWith:number) => ({type:'SET-ID', dialogsWith } as const )
}
export const getDialogsThunk = ():ThunkType => {
    return async (dispatch:any) => {
        let data = await dialogsAPI.getDialogs()
        dispatch(actions.getDialogs(data))
    }
}

export const getListOfMesThunk = (userId:number):ThunkType => {
    return async (dispatch:any) => {
        let dataList = await dialogsAPI.getDialogWithUser(userId)
        dispatch(actions.getListOfMessage(dataList))
        dispatch(actions.setId(userId))
    }
}

export const sendMyMessageThunk = (userId: number, body: string) => {
    return async(dispatch:any) => {
        await dialogsAPI.sendMessageToUser(userId, body) 
        dispatch(actions.sendMyMessage(body))
        let dataList = await dialogsAPI.getDialogWithUser(userId)
        dispatch(actions.getListOfMessage(dataList))
        dispatch(actions.setId(userId))
    }
}

export const startDialogWithUser = (userId: number) => {
    return async(dispatch: any) => {
        await dialogsAPI.statrDialogWithUser(userId)
        let data = await dialogsAPI.getDialogs()
        dispatch(actions.getDialogs(data))
    }
}
 

export default dialogsReducer;

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>
