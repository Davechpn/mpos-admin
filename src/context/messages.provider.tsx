import { collection, onSnapshot, query } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { firestore_db } from "../firebase-setup/firebase";
import { Message } from "../types/message";


const MessagesContext = createContext<any>(null);

export const MessagesProvider: React.FC<any> = ({ children }) => {
    const [messages, setMessages] = useState([])
    const [tabs, setTabs] = useState<Message[]>([])
    const [openTab, setOpenTab] = useState<Message | null>(null)

    const messagesRef = collection(firestore_db,"messages")

    useEffect(()=>{
         const messagesQuery = query(messagesRef)
         onSnapshot(messagesQuery,(snapshot)=>{
            const messages: any[] = []
            snapshot.forEach(d => {
                messages.push({ ...d.data(), id: d.id })
            })
            console.log('messages',messages)
            setMessages(messages as any)
         })
    },[])

    const addTab = (tab:Message)=>{

      let exists = false;
      if(tab.target === "task"){
         exists = tabs.some(t=>t.target_id === tab.target_id)
      }
      if(tab.target === "direct"){
         exists = tabs.some(t=>t.sender_id === tab.sender_id)
      }
     
     
      if(!exists){
         if(tabs.length === 2){
            let requiredTabs = tabs.splice(0,1)
            setTabs([...requiredTabs,tab])
         }else{
            setTabs([...tabs,tab])
         }
         
      }
      setOpenTab(tab)
  
    }

    const removeTab = (tab:any) => {
       console.log('removing tab',tab)
       const requiredTabs = tabs.filter((t)=>t.id !== tab.id)
       setTabs(requiredTabs)
     
    }
 
    return (
       <MessagesContext.Provider value={{ openTab, setOpenTab, messages, tabs, addTab, removeTab}}>
          {children}
       </MessagesContext.Provider>
    )
 
 }
 
 export default MessagesContext