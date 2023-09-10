export interface Team {
    id: string,
    name: string,
    createdAt: number,
    leader: string
}

export interface Goal {
    id: string,
    title: string,
    teamId: string,
    description: string,
    startDate: number,
    createdAt: number,
    deadline: number,
    active: boolean,
    isComplete: boolean,
    tasks: Task[]
}

export interface Task {
    title: string,
    summary: string,
    comments: string,
    createdAt: number,
    startDate: number,
    dueDate: number,
    assignee: any,
    assigneeId: string
    priority: string,
    stage: string
    createdBy: any
    createdById: string
}