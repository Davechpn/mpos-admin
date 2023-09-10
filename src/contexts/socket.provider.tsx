import React from "react";
import * as socketio from "socket.io-client";

const socket = socketio.connect("http://localhost:3001/");

export const SocketContext = React.createContext<any>({});


const SocketProvider:React.FC<any> = ({children}) => {
    return (
        <SocketContext.Provider value={socket}>
          {children}
        </SocketContext.Provider>
    )
}

export default SocketProvider