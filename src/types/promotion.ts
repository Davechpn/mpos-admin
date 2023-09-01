export interface Promotion {
    id:string
    name:string
    description:string
    start_date:number
    end_date:number
    features:string[]
    industries:string[]
    countries:string[]
    package_id:string,
    created_by:string
    created_date:number
}