import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";
import {ContactsType, ProfileType} from '../../../types/types';
import { useDispatch } from 'react-redux';
import { startDialogWithUser } from '../../../redux/dialogs-reducer';
import { Redirect } from 'react-router-dom';
import StartChat from './StartChattingButton';

type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

const ProfileInfo: React.FC<PropsType> = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData: ProfileType) => {
        // todo: remove then
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {isOwner && <input type={"file"} id="input_file" className={s.chooseFileBox} onChange={onMainPhotoSelected}/>}

                { editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData goToEditMode={() => {setEditMode(true)} } profile={profile} isOwner={isOwner}/> }

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}




const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {

    const [contacts, showContacts] = useState(false)
    

    const toggle = (contact:boolean) => {
    if(contact){
        showContacts(false)
    } else {
        showContacts(true)
    }
}

    return <div className={s.wrapper}>
        <div >
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
        }

        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <button className={s.button_showContacts} onClick={()=>toggle(contacts)}>Show contacts</button><br/>
        <StartChat userId = {profile.userId}/>
        {
            contacts 
         ? <div>{
            Object.keys(profile.contacts).map((key)  => {
            return <Contact key={key} contactTitle={key}  contactValue={profile.contacts[key as keyof ContactsType]}/>
        })}
        </div>
        :<></>
        }
        {isOwner && <div><button className={s.button_edit} onClick={goToEditMode}>Edit</button></div>}
        </div>
    </div>
}



type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}
const Contact: React.FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;



