import { useNavigate } from "react-router-dom"
import DeleteIcon from '@mui/icons-material/Delete';
import avatar from "./avatar.jpg"
import MessageIcon from '@mui/icons-material/Message';
import TextsmsIcon from '@mui/icons-material/Textsms';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { Add, DeleteOutline } from "@mui/icons-material";
import NewMember from "./new-member";
import { useState } from "react";
import { IconButton } from "@mui/material";
import { doc, setDoc } from "firebase/firestore";
import { firestore_db } from "../../../../firebase-setup/firebase";

const Members = (props:any) => {
    const [openNewMember, setOpenNewMember] = useState(false);
    const navigate  = useNavigate()

    const viewProfile = ()=>{
        console.log('navigate to profile')
        navigate("/profile/1")
    }

    const sendInvitation = (invitation:any)=>{
          console.log('sending invitition', invitation)
          const usersRef = doc(firestore_db, 'users', invitation.email);
          setDoc(usersRef,invitation)  
          setOpenNewMember(false)
    }

    return (

        <div>
               <div className="section-header"> <span>People </span>
                    <div>
                        <IconButton  aria-label="Add new invitation" color="primary">
                            <Add onClick={()=>setOpenNewMember(true)} fontSize="small" />
                        </IconButton>
                        <NewMember open={openNewMember} save={(invitation:any)=>sendInvitation(invitation)} cancel={()=>setOpenNewMember(false)} />
                    </div>
                </div>
   
        {
            props.users.map((user:any) =>
                <div key={user.id} className="invitation-item" onClick={viewProfile}>
                    <img src={avatar} className="invitation-item-avatar" />

                    <div className="invitation-item-details">
                        <div className="invitation-item-details-top">
                            <div className="invitation-item-email">{user.name} <TextsmsIcon fontSize="small"/></div>
                            <div className="invitation-item-action">
                             <DeleteOutline />  
                            </div>
                        </div>

                        <div className="invitation-item-details-bottom">
                            <div className="invitation-item-name">{user.email}</div>
                            <div className="invitation-item-status">{user.status}</div>
                        </div>
                    </div>

                </div>
            )}


    </div>
    )
}

export default Members