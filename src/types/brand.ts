export interface image {
    url: string,
    incomplete: boolean,
    incompleteMessage: string,
    isTransparent: boolean,
    side: string
}

export const enum DraftType {
    FromClient = "FromClient",
    InProgress = "InProgress",
    Rejected = "Rejected",
    Review = "Review",
    ClientEdits = "ClientEdits"
}

export const enum DarftSources {
    Client = "Client",
    Mine = "Mine",
    Reviewer = "Reviewer",
    Admin = "Admin"
}

export interface ClientEdit {
    clientId: number,
    action: string,
    field: string,
    newValue: string,
    oldValue: string,
    approved: boolean,
    approvedTime: number,
    approvedBy: string,
    reviewed: boolean,
    reviewedBy: string,
    reviewedAt: number
}

export interface ClientRating {
    clientId: number,
    rating: number,
    goodImplematation: boolean,
    comment: string
}

export interface Tel {
    name: string,
    number: string
}
export interface BrandTemplate {
    id: string
    name: string
    description: string
    tags: string[]
    image: image
    threeDImage?: image | null,
    video: string,
    sizes: string[]
    units: string[]
    category: string
    addonCategories: string[]
    varieties: string[]
    manufacturer: string
    streetAddress: string
    city: string
    country: string
    email: string,
    telNumbers: Tel[],
    website: string,
    draftNotes: string,
    draftType: string, //eg review, image adjustment, rejected, new from client, client Edition
    draftCreatedAt: number,
    createdBy: number
    createdAt: number
    reviewedAt: number
    reviewNotes: string
    reviewerId: number
    inReview: boolean
    is_approved: boolean
    lastModified: number
    clientEdits: ClientEdit[],
    creatorClientId: number | null
    creatorClientProductId: number | null
    fromClientCleanedBy: number | null
    ImplementationRatings: ClientRating[]
    hasZeroDepositOrder: boolean
    hasTransparencyAll: boolean
    isNotForUnder18: boolean
    isDirty: boolean
}