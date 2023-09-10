import { useNavigate } from "react-router-dom"
import avatar from "./avatar.jpg"
import TextsmsIcon from '@mui/icons-material/Textsms';
import { DeleteOutline } from "@mui/icons-material";
import NewUser from "./../users/users-new";
import { useContext, useEffect, useState } from "react";
import { collection, doc, onSnapshot, orderBy, query, updateDoc, where } from "firebase/firestore";
import { firestore_db } from "../../firebase";
import MessagesContext from "../../contexts/messages.provider";
import { Message } from "../../types/message";
import "./users.css"
import { User } from "../../types/user";


const Users = (props: any) => {
    const [members, setMembers] = useState<User[]>([])
    const [nonMembers, setNonMembers] = useState<User[]>([])
    const [isEmpty, setIsEmpty] = useState(false)
    const [isloading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const { addTab } = useContext(MessagesContext)
    const usersRef = collection(firestore_db, 'users')
    const domain = props.domain

    useEffect(() => {

        if (domain.name) {

            setMembers([])
            setIsLoading(true)

            let current_domain = ''

            if (domain.space === 'role' && domain.name) current_domain = 'role';
            if (domain.space === 'team' && domain.name) current_domain = 'team'

            let queryParams: any = []

            const queryUsers = query(usersRef, queryParams);

            onSnapshot(queryUsers, (snapshot) => {

                const users: any[] = []

                snapshot.forEach(d => {
                    users.push({ ...d.data(), id: d.id })
                })


                let members: User[] = []
                let non_members: User[] = []


                if (current_domain === 'role') {
                    members = users.filter((user) => user.roleId === domain.id)
                    non_members = users.filter((user) => user.roleId !== domain.id)
                }

                if (current_domain === 'team') {
                    members = users.filter((user) => user.teams.includes(domain.id))
                    non_members = users.filter((user) => !user.teams.includes(domain.id))
                }

                setMembers(members)
                setNonMembers(non_members)
                setIsLoading(false)

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

    const removeFromDomain = (user: any) => {
        let userRef = doc(firestore_db, `users/${user.id}`)

        if (domain.space === 'role') {
            updateDoc(userRef, { roleId: null })
        }

        if (domain.space === 'team') {
            console.log(user)
            const final_teams = user.teams.splice(domain.id, 1)
            updateDoc(userRef, { teams: final_teams })
        }



        // updateDoc(userRef,{})
    }

    return (

        <div>
            <div className="section-header"> <span>{domain.name} </span>
                {domain.name && <div className="section-header-actions">
                    <NewUser domain={domain} nonMembers={nonMembers} />
                </div>}
            </div>

            {domain.name &&
                members.map((user: any) =>
                    <div key={user.id} className="invitation-item" >
                        <img src={avatar} className="invitation-item-avatar" />

                        <div className="invitation-item-details">
                            <div className="invitation-item-details-top">
                                <div className="invitation-item-email" ><span onClick={viewProfile}>{user.name}</span>

                                </div>
                                <div className="invitation-item-action">
                                    <TextsmsIcon fontSize="small" onClick={() => openPMP(user)} />
                                    <DeleteOutline onClick={() => removeFromDomain(user)} />
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