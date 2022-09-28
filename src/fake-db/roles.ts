import { Role } from "../types/roles";

export const roles: Role[] = [
    {
        id:'1',
        name: "Data Cleck",
        description:"Adding brands gathered from internet reseach or in physical shops",
        count:5,
        permissions: {
            dashboard: {
                read: false,
                write: false,
                edit: false,
                delete: false
            },
            roles: {
                read: false,
                write: false,
                edit: false,
                delete: false
            },
            teams: {
                read: false,
                write: false,
                edit: false,
                delete: false
            },
            centers: {
                read: false,
                write: false,
                edit: false,
                delete: false
            },
            main_offices: {
                read: false,
                write: false,
                edit: false,
                delete: false
            },
            premiums: {
                read: false,
                write: false,
                edit: false,
                delete: false
            },
            promos: {
                read: false,
                write: false,
                edit: false,
                delete: false
            },
            brands: {
                read: true,
                write: true,
                edit: true,
                delete: false
            },
            categories: {
                read: true,
                write: true,
                edit: true,
                delete: false
            },
            moderation: {
                read: false,
                write: false,
                edit: false,
                delete: false
            },
            payments: {
                read: false,
                write: false,
                edit: false,
                delete: false
            },
            guides: {
                read: true,
                write: false,
                edit: false,
                delete: false
            }
        }
    },  
    {
        id:'2',
        count:3,
        description:"Editing brand images removing backgroud colors on brand pictures",
        name: "Graphics Designer",
        permissions: {
            dashboard: {
                read: false,
                write: false,
                edit: false,
                delete: false
            },
            roles: {
                read: false,
                write: false,
                edit: false,
                delete: false
            },
            teams: {
                read: false,
                write: false,
                edit: false,
                delete: false
            },
            centers: {
                read: false,
                write: false,
                edit: false,
                delete: false
            },
            main_offices: {
                read: false,
                write: false,
                edit: false,
                delete: false
            },
            premiums: {
                read: false,
                write: false,
                edit: false,
                delete: false
            },
            promos: {
                read: false,
                write: false,
                edit: false,
                delete: false
            },
            brands: {
                read: true,
                write: true,
                edit: true,
                delete: false
            },
            categories: {
                read: false,
                write: false,
                edit: false,
                delete: false
            },
            moderation: {
                read: true,
                write: true,
                edit: true,
                delete: false
            },
            payments: {
                read: false,
                write: false,
                edit: false,
                delete: false
            },
            guides: {
                read: true,
                write: false,
                edit: false,
                delete: false
            }
        }
    },
    {
        id:'3',
        name: "Software Dev",
        description:"Testing and verifiying system features and perfomance",
        count:2,
        permissions: {
            dashboard: {
                read: false,
                write: false,
                edit: false,
                delete: false
            },
            roles: {
                read: false,
                write: false,
                edit: false,
                delete: false
            },
            teams: {
                read: false,
                write: false,
                edit: false,
                delete: false
            },
            centers: {
                read: false,
                write: false,
                edit: false,
                delete: false
            },
            main_offices: {
                read: false,
                write: false,
                edit: false,
                delete: false
            },
            premiums: {
                read: false,
                write: false,
                edit: false,
                delete: false
            },
            promos: {
                read: false,
                write: false,
                edit: false,
                delete: false
            },
            brands: {
                read: false,
                write: false,
                edit: false,
                delete: false
            },
            categories: {
                read: false,
                write: false,
                edit: false,
                delete: false
            },
            moderation: {
                read: false,
                write: false,
                edit: false,
                delete: false
            },
            payments: {
                read: false,
                write: false,
                edit: false,
                delete: false
            },
            guides: {
                read: false,
                write: false,
                edit: false,
                delete: false
            }
        }
    },
    {
        id:'4',
        name: "HR Office",
        description:"Manages employee users, rates, profiles and earnings",
        count:1,
        permissions: {
            dashboard: {
                read: false,
                write: false,
                edit: false,
                delete: false
            },
            roles: {
                read: true,
                write: false,
                edit: false,
                delete: false
            },
            teams: {
                read: true,
                write: true,
                edit: true,
                delete: false
            },
            centers: {
                read: false,
                write: false,
                edit: false,
                delete: false
            },
            main_offices: {
                read: false,
                write: false,
                edit: false,
                delete: false
            },
            premiums: {
                read: false,
                write: false,
                edit: false,
                delete: false
            },
            promos: {
                read: false,
                write: false,
                edit: false,
                delete: false
            },
            brands: {
                read: false,
                write: false,
                edit: false,
                delete: false
            },
            categories: {
                read: false,
                write: false,
                edit: false,
                delete: false
            },
            moderation: {
                read: false,
                write: false,
                edit: false,
                delete: false
            },
            payments: {
                read: false,
                write: false,
                edit: false,
                delete: false
            },
            guides: {
                read: false,
                write: false,
                edit: false,
                delete: false
            }
        }
    },
    {
        id:'5',
        name: "Sales & Marketing",
        description:"Cover sales to new centers, run promotions and best monetization strategy",
        count:1,
        permissions: {
            dashboard: {
                read: true,
                write: false,
                edit: false,
                delete: false
            },
            roles: {
                read: false,
                write: false,
                edit: false,
                delete: false
            },
            teams: {
                read: false,
                write: false,
                edit: false,
                delete: false
            },
            centers: {
                read: true,
                write: true,
                edit: false,
                delete: false
            },
            main_offices: {
                read: true,
                write: true,
                edit: false,
                delete: false
            },
            premiums: {
                read: true,
                write: true,
                edit: true,
                delete: false
            },
            promos: {
                read: true,
                write: true,
                edit: true,
                delete: false
            },
            brands: {
                read: true,
                write: false,
                edit: false,
                delete: false
            },
            categories: {
                read: false,
                write: false,
                edit: false,
                delete: false
            },
            moderation: {
                read: false,
                write: false,
                edit: false,
                delete: false
            },
            payments: {
                read: true,
                write: true,
                edit: false,
                delete: false
            },
            guides: {
                read: true,
                write: false,
                edit: false,
                delete: false
            }
        }
    }
]
