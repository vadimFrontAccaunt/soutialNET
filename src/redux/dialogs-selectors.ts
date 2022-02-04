import {createSelector} from "reselect";
import { AppStateType } from "./redux-store";

export const getDialogsSelector = (state:AppStateType) => {
	return state.dialogsPage.dialogs;
}

export const getDialogs = createSelector(getDialogsSelector, (dialogs) => {
	return dialogs.filter(d => true)
})

export const getListOfMessagesSelector = (state:AppStateType) => {
	return state.dialogsPage.messages.items
}

export const getListOfMessages = createSelector(getListOfMessagesSelector, (items) => {
	return items.filter(i => true)
})

export const getMessagerId = (state: AppStateType) => {
	return state.dialogsPage.dialogsWith
}
