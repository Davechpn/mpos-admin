export const enum FeatureType{
    Free = "free",
    Premium = "premium"
}

export interface Feature {
    id:string,
    name:string,
    description:string
    type:FeatureType
    industries:string[]
    countries:string[]
}