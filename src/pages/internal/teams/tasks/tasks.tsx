import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Task } from "../../../../types/team";
import { Add } from "@mui/icons-material";
import { firestore_db } from "../../../../firebase-setup/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import NewTeam from "../new-team";
import NewTask from "./new-task";

const Tasks = (props: any) => {
    console.log(props)
    const [openNewTask, setOpenNewTask] = useState(false)

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
                        <div key={task.date_created} className="task-bar">{task.summary}</div>
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