import { Contact } from "./contact"

export interface User {
    id?: string
    name: string
    email: string
    avatar: string
    roleId: string
    teams: string[]
    suspendendAt: number | null
    contact: Contact | null
    country: string | null
    status: string
    verificationCode: number
    createdAt: number
    createdBy: string
    timestamp: number
}


