import { Tooltip, IconButton, Avatar, TextField } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import MessagesContext from "../../contexts/messages.provider"
import "./chat-strip.css"
import SendIcon from '@mui/icons-material/Send';
import { addDoc, collection, onSnapshot, query, where } from "firebase/firestore"
import { firestore_db } from "../../firebase"
import { Message } from "../../types/message"
import { Close, HorizontalRule } from "@mui/icons-material"
import AuthContext from "../../contexts/auth.provider"


//Opens and closes threads
//fetches messages for a thread
//sends messages from a thread

const Chatstrip = () => {
    const { tabs, openTab, setOpenTab, removeTab } = useContext(MessagesContext);
    const [currentMessage, setCurrentMessage] = useState("");
    const [messages, setMessages] = useState<any[]>([])
    const { auth } = useContext(AuthContext)


    const messagesRef = collection(firestore_db, 'messages')
    const getThreadMessages = () => {
        //triggered every time the openTab changes
        console.log("run get messages")
        if(openTab){
            const messagesQuery = query(messagesRef, where("target_id","==",openTab.target_id))
            onSnapshot(messagesQuery, (snapshot) => {
                const msgs: any[] = []
                snapshot.forEach((data) => {
                    msgs.push({
                        ...data.data(),
                        id: data.id,
                        is_mine: is_Mine(data.data().sender_id)
                    })
    
                })
                setMessages(msgs)
            })
        }


    }

    useEffect(getThreadMessages, [openTab])

    const is_Mine = (sender_id: string) => {
        return auth.user.id === sender_id
    }


    const handleSave = async () => {

        //create new message object
        //get the current user_id from auth
        //
        const user = auth.user

        const newMessage: Message = {
            // avatar:"https://umbrella.data.naturalint.com/production/articles/uploads/photo/Untitleddesign403.20220526114538.jpg",
            avatar: user.avatar,
            sender_id: user.id,
            sender_name: user.name,

            text: currentMessage,
            attachments: [],
            stars: [],
            domain: openTab.domain,
            target_id: openTab.target_id,
            task_id: openTab.task_id,
            is_send: true,

            //fetch all the people following the task
            participants: [],//members of a tasks or direct message reciver
            unreads: [], //Participants subtract self id



        }

        //send to firebase 
        console.log(newMessage)

        const messagesRef = collection(firestore_db, 'messages')
        let result = await addDoc(messagesRef, newMessage)
        console.log(result)

    }


    return (
        <div className="chat-strip">

            {tabs.map((tab: Message) =>
                <div key={tab.sender_name} className={`thread-contaner ${openTab?.id === tab.id ? 'open-thread' : 'thread'}`}>

                    <div className="thread-header" >
                        <Tooltip title={tab.sender_name}>
                            <IconButton
                                size="small"
                                sx={{ ml: 2 }}
                                onClick={() => setOpenTab(tab)}
                            >
                                <Avatar src={tab.avatar} sx={{ width: 32, height: 32 }} alt={tab.sender_name}></Avatar>
                            </IconButton>
                        </Tooltip>
                        <div className="thread-header-title" onClick={() => setOpenTab(tab)}>{tab.sender_name}</div>
                        <div className="flex">
                            <HorizontalRule onClick={() => setOpenTab(null)} />
                            <Close onClick={() => removeTab(tab)} />
                        </div>

                    </div>

                    {openTab?.id === tab.id &&
                        <div className="thread-body">
                            {messages.map((message) =>
                                <div key={message.id} className="thread-message">
                                    <div className={message.is_mine ? "message-mine " : "message"}>
                                        {message.text}
                                    </div>

                                </div>
                            )
                            }
                        </div>
                    }


                    {openTab?.id === tab.id &&
                        <div className="thread-footer">

                            <TextField className="input-text"
                                value={currentMessage}
                                onChange={($event) => setCurrentMessage($event.target.value)}
                            />

                            <SendIcon onClick={handleSave} />
                        </div>
                    }

                </div>)}


        </div>
    )

}

export default Chatstrip