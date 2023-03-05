import { Contact } from "./contact"

export interface User{
    id?:string
    name: string
    email:string
    avatar:string
    role_id: string
    teams: string[]
    suspendend_date: number | null
    contact:Contact | null
    country:string | null
    status:string
    verification_code:number
    created_date:number
    created_by:string
    timestamp:number
}


