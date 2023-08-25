export interface image {
    url: string,
    incomplete:boolean,
    incomplete_message:string,
    is_transparent: boolean
}

export const enum DraftType{
    FromClient ="From client",
    InProgress="In progress",
    Rejected="Rejected",
    Review="Review",
    ClientEdits="Client edits"
}

export const enum DarftSources{
    Client ="Client",
    Mine="Mine",
    Reviewer="Reviewer",
    Admin="Admin"
}

export interface ClientEdit {
    client_id: number,
    action: string,
    field: string,
    new_value: string,
    old_value: string,
    approved: boolean,
    approved_time: number,
    approved_by: string,
    reviewed: boolean,
    reviewed_by: string,
    review_date: number
}

export interface ClientRating {
    client_id: number,
    rating: number,
    good_implematation:boolean,
    comment: string
}

export interface Tel {
    name:string,
    number:string
}
export interface BrandTemplate {
    id: string
    name: string
    description:string
    tags: string[]
    image: image
    threeD_image?: image | null,
    video: string,
    sizes: string[]
    units: string[]
    category: string
    addon_categories:string[]
    varieties: string[]
    manufacturer: string
    street_address: string
    city: string
    country: string
    email: string,
    tel_numbers:Tel[],
    website: string,
    draft_notes:string,
    draft_type:string //eg review, image adjustment, rejected, new from client, client Edition
    created_by: number
    created_date: number
    review_date: number
    review_notes:string
    reviewer_id:number
    in_review:boolean
    is_approved: boolean
    last_modified: number
    client_edits: ClientEdit[],
    creator_client_id: number | null
    creator_client_product_id:number | null
    from_client_cleaned_by:number | null
    Implementation_ratings: ClientRating[]
    has_zero_deposit_order: boolean
    has_transparency_all: boolean
    is_not_for_under_18: boolean
    is_dirty: boolean
}