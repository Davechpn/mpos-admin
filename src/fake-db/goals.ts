import { Goal, Task } from "../types/team";

const tasks:Task[]=[{
    summary:"Enquire brands which are not available online",
    comments:"",
    date_created:0,
    start_date:0,
    due_date:0,
    assignee:0,
    priority:"",
    stage:"todo"
},
{
    summary:"Input brand details",
    comments:"",
    date_created:1,
    start_date:0,
    due_date:0,
    assignee:0,
    priority:"",
    stage:"in-progress"
},
{
    summary:"Snapshot OK Supermarket shelves",
    comments:"",
    date_created:2,
    start_date:0,
    due_date:0,
    assignee:0,
    priority:"",
    stage:"complete"
}
]

export const goals:Goal[] = [{
    id:"1",
    team_id:"1",
    description:"To complete 250 signups target in and around city",
    start_date:0,
    created_date:0,
    deadline:0,
    active:true,
    is_complete:false,
    tasks:tasks
}]

