import { contact } from "./contact"

export interface Brand {
    id:string
    name:string
    image:string
    sizes:string[]
    category:string
    varieties:string[]
    producer:string
    street_address:string
    city:string
    country:string
    contacts:contact[],
    website:string
 }