import React, {useState, useEffect, ChangeEvent} from 'react';
import s from './ProfileInfo.module.css'

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
            <div className={s.status}>
                <b>Status: </b> <span  onClick={activateEditMode}>{props.status || "You can write yours status here. Just click onse on this message"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input className={s.status} onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                       value={status}/>
            </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks;
