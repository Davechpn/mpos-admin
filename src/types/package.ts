export interface PackagePrice {
    duration:number,
    amount:number,
    extention_time:number
}

export interface Package {
    id:string
    name:string,
    description:string,
    prices:PackagePrice[],
    features:string[],
    color:string,
    level:number
}