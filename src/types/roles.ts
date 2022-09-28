export interface Role {
    id:string,
    name:string,
    description:string,
    permissions:Permissions,
    count:number
}

interface Permissions{
    dashboard:Access,
    roles:Access,
    teams:Access,
    centers:Access,
    main_offices:Access,
    premiums:Access,
    promos:Access,
    brands:Access,
    categories:Access,
    moderation:Access,
    payments:Access,
    guides:Access
}

interface Access{
    read:boolean,
    write:boolean,
    edit:boolean,
    delete:boolean
}