export interface Message {
    id?:string,
    avatar:string,
    unreads:[],
    participants:string[],
    text:string,
    attachments:any[],
    stars:string[],
    target:string,
    target_id:string,
    sender_id:string,
    sender_name:string,
    is_send:boolean
}