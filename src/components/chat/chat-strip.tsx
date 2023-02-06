import { Tooltip, IconButton, Avatar } from "@mui/material"
import avatar from "./avatar.jpg"
import "./chat-strip.css"

const Chatstrip = () => {

    const threads = [{
        name: "Joe",
        avatar: "",
        total_unread: 5
    },
    {
        name: "Tari",
        avatar: "",
        total_unread: 5
    },
    {
        name: "Rue",
        avatar: "",
        total_unread: 5
    }
    ]

    return (
        <div className="chat-strip">
            {threads.map((thread) =>
                <div key={thread.name} className="thread-contaner">
                    <div className="thread">
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