export interface Role {
    id: string,
    name: string,
    description: string,
    permissions: Permissions
}

interface Permissions {
    dashboard: string,
    roles: string,
    teams: string,
    centers: string,
    offices: string,
    premiums: string,
    promos: string,
    brands: string,
    categories: string,
    moderation: string,
    payments: string,
    feedback: string
    guides: string
}

