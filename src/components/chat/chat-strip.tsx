import { Tooltip, IconButton, Avatar } from "@mui/material"
import { useContext } from "react"
import MessagesContext from "../../context/messages.provider"
import avatar from "./avatar.jpg"
import "./chat-strip.css"

const Chatstrip = () => {
    const { openTab, setOpenTab } = useContext(MessagesContext)

    console.log('opentab', openTab)

    const threads = [{
        id:"aaaa",
        type:"task",
        name: "Collecting shop pics",
        avatar: "",
        total_unread: 5
    },
    {
        id:"bbbb",
        type:"direct",
        name: "Tari",
        avatar: "",
        total_unread: 5
    },
    {
        id:"ccc",
        type:"direct",
        name: "Rue",
        avatar: "",
        total_unread: 5
    }
    ]

    return (
        <div className="chat-strip">

            {threads.map((thread) =>
                <div key={thread.name} className={`thread-contaner ${openTab?.id === thread.id ? 'open-thread' : ' '}`}>
                    <div className="thread" onClick={()=>setOpenTab(thread)}>
                        <Tooltip title={thread.name}>
                            <IconButton
                                size="small"
                                sx={{ ml: 2 }}
                            >
                                <Avatar sx={{ width: 32, height: 32 }}>{thread.name.substring(0, 1)}</Avatar>
                            </IconButton>
                        </Tooltip>

                        <span>new message</span>

                    </div>

                </div>)}

         
        </div>
    )

}

export default Chatstrip