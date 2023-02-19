import { Tooltip, IconButton, Avatar, TextField } from "@mui/material"
import { useContext, useState } from "react"
import MessagesContext from "../../context/messages.provider"
import avatar from "./avatar.jpg"
import "./chat-strip.css"
import SendIcon from '@mui/icons-material/Send';
import { addDoc, collection } from "firebase/firestore"
import { firestore_db } from "../../firebase-setup/firebase"
import { async } from "@firebase/util"
import { Message } from "../../types/message"
import { Close, HorizontalRule } from "@mui/icons-material"
import AuthContext from "../../context/auth.provider"


//Opens and closes threads
//fetches messages for a thread
//sends messages from a thread

const Chatstrip = () => {
    const { tabs, openTab, setOpenTab, removeTab } = useContext(MessagesContext);
    const [ currentMessage, setCurrentMessage ]= useState("");
    const { auth }   = useContext(AuthContext)

  

    

    const threads = [{
        id: "aaaa",
        type: "task",
        name: "Collecting shop pics",
        avatar: "",
        total_unread: 5
    },
    {
        id: "bbbb",
        type: "direct",
        name: "Tari",
        avatar: "",
        total_unread: 5
    },
    {
        id: "ccc",
        type: "direct",
        name: "Rue",
        avatar: "",
        total_unread: 5
    }
    ]

    const messages = [
        {
            id: "1",
            text: "Hi Broski is everything alright",
            is_mine: false
        },
        {
            id: "2",
            text: "Im okay thanks",
            is_mine: true
        }
    ]

    const handleSave = async() => {

        //create new message object
        //get the current user_id from auth
        //
        const user = auth.user

        const newMessage:Message = {
            // avatar:"https://umbrella.data.naturalint.com/production/articles/uploads/photo/Untitleddesign403.20220526114538.jpg",
            avatar: user.avatar,
            sender_id:user.id,
            sender_name:user.name,
          
            text:currentMessage,
            attachments:[],
            stars:[],
            target:openTab.target,
            target_id:openTab.target_id,
         
            is_send:true,

            //fetch all the people following the task
            participants:[],//members of a tasks or direct message reciver
            unreads:[], //Participants subtract self id
           
      

        }
 
        //send to firebase 
        console.log(newMessage)

        const messagesRef = collection(firestore_db,'messages')
        let result = await addDoc(messagesRef,newMessage)
        console.log(result)

    }


    return (
        <div className="chat-strip">

            {tabs.map((tab:Message) =>
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
                        <HorizontalRule onClick={()=>setOpenTab(null)}/>
                        <Close onClick={()=>removeTab(tab)}/>
                      
                        </div>
                       
                    </div>

                    {openTab?.id === tab.id &&
                        <div className="thread-body">
                        
                            { messages.map((message) => 
                                <div key={message.id} className="thread-message">
                                    <div className={message.is_mine?"message-mine ":"message"}>
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
                              onChange={($event)=>setCurrentMessage($event.target.value)}
                            />
                            
                            <SendIcon onClick={handleSave} />
                        </div>
                    }

                </div>)}


        </div>
    )

}

export default Chatstrip