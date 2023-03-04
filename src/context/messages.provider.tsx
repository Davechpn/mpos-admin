import { collection, onSnapshot, query } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { firestore_db } from "../firebase-setup/firebase";
import { Message } from "../types/message";


const MessagesContext = createContext<any>(null);

export const MessagesProvider: React.FC<any> = ({ children }) => {
   const [messages, setMessages] = useState([])
   const [taskMessages, setTaskMessages] = useState<any[]>([])
   const [tabs, setTabs] = useState<Message[]>([])
   const [openTab, setOpenTab] = useState<Message | null>(null)

   const messagesRef = collection(firestore_db, "messages")

   useEffect(() => {
      const messagesQuery = query(messagesRef)
      onSnapshot(messagesQuery, (snapshot) => {
         const messages: any[] = []
         const task_messages:any[] = []
         snapshot.forEach(data => {
            let message:any = { ...data.data(), id: data.id }
            message.domain === "task" && task_messages.push(message)
            messages.push(message)

         })
         setMessages(messages as any)
         setTaskMessages(task_messages)
      })
   }, [])

   const addTab = (tab: Message) => {

      let exists = false;

      if (tab.domain === "direct") {
         exists = tabs.some(t => t.sender_id === tab.sender_id)
      } else {
         exists = tabs.some(t => t.target_id === tab.target_id)
      }


      if (!exists) {
         if (tabs.length === 3) {
            let requiredTabs = tabs
            requiredTabs.shift()
            setTabs([...requiredTabs, tab])
         } else {
            setTabs([...tabs, tab])
         }

      }
      setOpenTab(tab)

   }

   const removeTab = (tab: any) => {
      console.log('removing tab', tab)
      const requiredTabs = tabs.filter((t) => t.id !== tab.id)
      setTabs(requiredTabs)

   }

   return (
      <MessagesContext.Provider value={{
         openTab,
         setOpenTab,
         messages,
         tabs,
         addTab,
         removeTab,
         taskMessages

      }}>
         {children}
      </MessagesContext.Provider>
   )

}

export default MessagesContext