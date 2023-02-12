export interface Team {
    id:string,
    name:string,
    date_created:number,
    led_by:string
}

export interface Goal{
    id:string,
    team_id:string,
    description:string,
    start_date:number,
    created_date:number,
    deadline:number,
    active:boolean,
    is_complete:boolean,
    tasks:Task[]
}

export interface Task{

    summary:string,
    comments:string,
    date_created:number,
    start_date:number,
    due_date:number,
    assignee:number,
    priority:string,
    stage:string
}