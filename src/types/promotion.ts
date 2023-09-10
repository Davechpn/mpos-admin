export interface Promotion {
    id: string
    name: string
    description: string
    startDate: number
    endDate: number
    features: string[]
    industries: string[]
    countries: string[]
    packageId: string,
    createdBy: string
    createdAt: number
}