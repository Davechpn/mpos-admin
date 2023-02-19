export interface Auth{
    user:user,
    token:string
 }

 interface user {
    id:string,
    avatar: string,
    name: string,
    role_id: string,
    country:string
 }