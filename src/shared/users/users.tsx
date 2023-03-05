import { useNavigate } from "react-router-dom"
import avatar from "./avatar.jpg"
import TextsmsIcon from '@mui/icons-material/Textsms';
import { DeleteOutline } from "@mui/icons-material";
import NewUser from "./../users/users-new";
import { useContext, useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { firestore_db } from "../../firebase";
import MessagesContext from "../../contexts/messages.provider";
import { Message } from "../../types/message";
import "./users.css"


const Users = (props: any) => {
    const [users, setUsers] = useState([])
    const [isEmpty, setIsEmpty] = useState(false)
    const [isloading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const { addTab } = useContext(MessagesContext)
    const usersRef = collection(firestore_db, 'users')
    const domain = props.domain

    useEffect(() => {

        if (domain.name) {

            setUsers([])
            setIsLoading(true)

            let queryParams: any = []

            if (domain.space === 'role' && domain.name) queryParams = where('role_id', '==', domain.id)
            if (domain.space === 'team' && domain.name) queryParams =where('teams', 'array-contains', domain.id);


            const queryUsers = query(usersRef, queryParams);

            onSnapshot(queryUsers, (snapshot) => {
                const users: any[] = []
                snapshot.forEach(d => {
                    users.push({ ...d.data(), id: d.id })
                })

                setUsers(users as any)
                setIsLoading(false)
                setIsEmpty(users.length === 0)

            })
        }


    }, [props])

    const viewProfile = () => {
        console.log('navigate to profile')
        navigate("/profile/1")
    }


    const openPMP = (user: any) => {
        const tab: Message = {
            id: user.id,
            avatar: user.avatar,
            sender_id: user.id,
            sender_name: user.name,

            text: "",
            attachments: [],
            stars: [],
            domain: "direct",
            target_id: user.id,
            is_send: true,
            task_id: null,
            //fetch all the people following the task
            participants: [],//members of a tasks or direct message reciver
            unreads: [],
        }

        addTab(tab)

    }

    return (

        <div>
            <div className="section-header"> <span>{domain.name} </span>
                {domain.name && <div className="section-header-actions">
                    <NewUser domain={domain} />
                </div>}
            </div>

            {domain.name &&
                users.map((user: any) =>
                    <div key={user.id} className="invitation-item" >
                        <img src={avatar} className="invitation-item-avatar" />

                        <div className="invitation-item-details">
                            <div className="invitation-item-details-top">
                                <div className="invitation-item-email" ><span onClick={viewProfile}>{user.name}</span>

                                </div>
                                <div className="invitation-item-action">
                                    <TextsmsIcon fontSize="small" onClick={() => openPMP(user)} />
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

            {!domain.name && <div className="no-selection"> No {domain.space} selected</div>}
            {isloading && <div className="no-selection"> loading ...</div>}
            {(isEmpty && !isloading) && <div className="no-selection"> No members in this {domain.space}</div>}


        </div>
    )
}

export default Users