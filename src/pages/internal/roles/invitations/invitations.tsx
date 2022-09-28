import { useState } from "react"
import { invitations_data } from "../../../../fake-db/invitations"
import DeleteIcon from '@mui/icons-material/Delete';
import "./invitations.css"
import avatar from "./avatar.jpg"
import { useNavigate } from "react-router-dom";


const Invitations = () => {
    const [invitations, setInvitations] = useState()
    const navigate  = useNavigate()

    const viewProfile = ()=>{
        console.log('navigate to profile')
        navigate("/profile/1")
    }

    return (<div>
        {
            invitations_data.map((user) =>
                <div key={user.id} className="invitation-item" onClick={viewProfile}>
                    <img src={avatar} className="invitation-item-avatar" />

                    <div className="invitation-item-details">
                        <div className="invitation-item-details-top">
                            <div className="invitation-item-email">{user.email}</div>
                            <div className="invitation-item-action"><DeleteIcon /></div>
                        </div>

                        <div className="invitation-item-details-bottom">
                            <div className="invitation-item-name">{user.name}</div>
                            <div className="invitation-item-status">{user.status}</div>
                        </div>
                    </div>

                </div>
            )}


    </div>)
}

export default Invitations