import { Contact } from "./contact"

export interface User{
    id:string
    name: string
    email:string
    avatar:string
    role: string
    teams: string[]
    suspendend_date: number
    contact:Contact
    country:string
    status:string
    verification_code:number
    created_date:number
    created_by:string
}


