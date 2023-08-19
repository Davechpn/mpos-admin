export interface Message {
    id?:string,
    avatar:string,
    unreads:[],
    participants:string[],
    text:string,
    attachments:any[],
    stars:string[],
    domain:string,
    target_id:string,
    task_id:string | null,
    sender_id:string,
    sender_name:string,
    is_send:boolean,
    
}