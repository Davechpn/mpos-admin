import { createContext, useState } from "react";


const MessagesContext = createContext<any>(null);

export const MessagesProvider: React.FC<any> = ({ children }) => {
    const [messages, setMessages] = useState(null)
    const [tabs, setTabs] = useState(null)
    const [openTab, setOpenTab] = useState(null)
 
    return (
       <MessagesContext.Provider value={{ openTab, setOpenTab}}>
          {children}
       </MessagesContext.Provider>
    )
 
 }
 
 export default MessagesContext