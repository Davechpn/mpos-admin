import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Task } from "../../../../types/team";
import { Add } from "@mui/icons-material";
import { firestore_db } from "../../../../firebase-setup/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useContext, useState } from "react";
import NewTask from "./new-task";
import MessagesContext from "../../../../context/messages.provider";
import TextsmsIcon from '@mui/icons-material/Textsms';
import { Message } from "../../../../types/message";



const Tasks = (props: any) => {
    console.log(props)
    const [openNewTask, setOpenNewTask] = useState(false)
    const {addTab} = useContext(MessagesContext)

    const all_tasks = props.tasks as Task[];
    const todo_tasks: Task[] = all_tasks.filter(t => t.stage === 'todo');
    const in_progress_tasks: Task[] = all_tasks.filter(t => t.stage === 'in-progress');
    const complete_tasks: Task[] = all_tasks.filter(t => t.stage === 'complete')

    const saveTask = (task:any)=>{
        console.log('saving task', task)
        const tasksRef = collection(firestore_db, 'tasks');
        addDoc(tasksRef,task)  
        setOpenNewTask(false)
    }

    const openInTab = (task:any)=>{
        const tab:Message = {
            id:task.id,
            avatar: "",
            sender_id:"",
            sender_name:task.summary,
          
            text:"",
            attachments:[],
            stars:[],
            target:"task",
            target_id:task.id,
         
            is_send:true,

            //fetch all the people following the task
            participants:[],//members of a tasks or direct message reciver
            unreads:[],
        }

        addTab(tab)

    }


    return (
        <>
           <div className="section-header"> <span> Tasks</span>
                    <div><Add onClick={()=>setOpenNewTask(true)} fontSize="small" /></div>
                 
            </div>
            <NewTask open={openNewTask} save={(task:any)=>saveTask(task)} cancel={()=>setOpenNewTask(false)}/>
            <Accordion elevation={0}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Todo</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {todo_tasks.map((task) =>
                        <div key={task.date_created} className="task-bar">
                            {task.summary}
                            <TextsmsIcon fontSize="small" onClick={()=>openInTab(task)}/>
                        </div>
                    )}
                </AccordionDetails>
            </Accordion>
            <Accordion elevation={0}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>In-progress</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {in_progress_tasks.map((task) =>
                        <div key={task.date_created} className="task-bar">{task.summary}</div>
                    )}
                </AccordionDetails>
            </Accordion>
            <Accordion elevation={0} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>Completed</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {complete_tasks.map((task) =>
                        <div key={task.date_created} className="task-bar">{task.summary}</div>
                    )}
                </AccordionDetails>
            </Accordion>

        </>)
}

export default Tasks