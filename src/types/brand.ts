export interface image {
    url: string,
    incomplete:boolean,
    incomplete_message:string,
    is_transparent: boolean
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
    moderated: boolean,
    moderated_by: string,
    moderation_date: number
}

export interface ClientRating {
    client_id: number,
    rating: number,
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
    created_by: number
    created_date: number
    is_moderated: boolean
    moderation_date: number
    moderator_notes:string
    moderator_id:number
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