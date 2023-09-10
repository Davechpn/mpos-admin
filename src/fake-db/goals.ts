import { Goal, Task } from "../types/team";

const tasks: Task[] = [{
    title: "",
    summary: "Enquire brands which are not available online",
    comments: "",
    createdAt: 0,
    startDate: 0,
    dueDate: 0,
    assignee: 0,
    assigneeId: "",
    createdBy: "",
    createdById: "",
    priority: "",
    stage: "todo"
},
{
    title: "",
    summary: "Input brand details",
    comments: "",
    createdAt: 1,
    startDate: 0,
    dueDate: 0,
    assignee: 0,
    priority: "",
    stage: "in-progress",
    assigneeId: "",
    createdBy: "",
    createdById: "",
},
{
    title: "",
    summary: "Snapshot OK Supermarket shelves",
    comments: "",
    createdAt: 2,
    startDate: 0,
    dueDate: 0,
    assignee: 0,
    priority: "",
    stage: "complete",
    assigneeId: "",
    createdBy: "",
    createdById: "",
}
]

export const goals: Goal[] = [{
    id: "1",
    title: "",
    teamId: "1",
    description: "To complete 250 signups target in and around city",
    startDate: 0,
    createdAt: 0,
    deadline: 0,
    active: true,
    isComplete: false,
    tasks: tasks
}]

