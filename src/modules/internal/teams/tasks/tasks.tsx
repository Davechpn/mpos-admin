import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Task } from "../../../../types/team";
import { Add } from "@mui/icons-material";
import { firestore_db } from "../../../../firebase";
import { addDoc, collection, onSnapshot, query } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import NewTask from "./new-task";
import MessagesContext from "../../../../contexts/messages.provider";
import TextsmsIcon from '@mui/icons-material/Textsms';
import { Message } from "../../../../types/message";



const Tasks = () => {

    const [openNewTask, setOpenNewTask] = useState(false)
    const { addTab, taskMessages } = useContext(MessagesContext)
    const [tasks, setTasks] = useState<any[]>([])
    const [todoTasks, setTodoTasks] = useState<any[]>([])



    const in_progress_tasks: Task[] = []
    const complete_tasks: Task[] = []

    const tasksRef = collection(firestore_db, 'tasks')

    const saveTask = (task: any) => {
        console.log('saving task', task)
        const tasksRef = collection(firestore_db, 'tasks');
        addDoc(tasksRef, task)
        setOpenNewTask(false)
    }

    const openInTab = (task: any) => {
        const tab: Message = {
            id: task.id,
            avatar: "",
            sender_id: "",
            sender_name: task.summary,
            text: "",
            attachments: [],
            stars: [],
            domain: "task",
            target_id: task.id,
            task_id: task.id,
            is_send: true,

            //fetch all the people following the task
            participants: [],//members of a tasks or direct message reciver
            unreads: [],
        }

        addTab(tab)

    }

    const aggregate = () => {
        //rerun the tasks giving them message count
        if (taskMessages && tasks) {
            let aggregated = tasks.map((task: any) => {
                return {
                    ...task,
                    unreads: taskMessages.length
                }
            })
            console.log('Task messages', taskMessages)
            setTodoTasks(aggregated)
            console.log('Aggregated', aggregated)
        }
    }

    useEffect(() => {
        // Getting tasks
        let queryTasks = query(tasksRef)
        onSnapshot(queryTasks, (snapshot) => {
            const tasks: any[] = []
            snapshot.forEach(d => {
                tasks.push({ ...d.data(), id: d.id })
            })
            setTasks(tasks as any)
            console.log(tasks)
        })


    }, [])

    useEffect(aggregate, [tasks, taskMessages])


    return (
        <>
            <div className="section-header"> <span> Tasks</span>
                <div><Add onClick={() => setOpenNewTask(true)} fontSize="small" /></div>

            </div>
            <NewTask open={openNewTask} save={(task: any) => saveTask(task)} cancel={() => setOpenNewTask(false)} />
            <Accordion elevation={0}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Todo</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {todoTasks.map((task) =>
                        <div key={task.id} className="task-bar">
                            {task.summary}
                            <TextsmsIcon fontSize="small" onClick={() => openInTab(task)} />
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
                        <div key={task.createdAt} className="task-bar">{task.summary}</div>
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
                        <div key={task.createdAt} className="task-bar">{task.summary}</div>
                    )}
                </AccordionDetails>
            </Accordion>

        </>)
}

export default Tasks