export interface Payment {
    id:string
    amount:number
    date:number
    center:string
    package:string
    payment_method:string
    cashier:string
    revoked:boolean
}