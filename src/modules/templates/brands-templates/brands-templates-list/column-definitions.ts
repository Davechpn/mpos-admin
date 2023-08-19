import { GridColDef } from "@mui/x-data-grid";

export const draftTemplatesColumns: GridColDef[] = [{
    field: "name",
    headerName: 'Name',
    width: 150
}, {
    field: "category",
    headerName: 'Category',
    width: 150
},
{
    field: "producer",
    headerName: "Producer",
    width: 150
}
    ,
{
    field: "stage",
    headerName: "Stage",
    width: 150
}
]

export const unModeratedTemplatesColumns: GridColDef[] = [{
    field: "name",
    headerName: 'Name',
    width: 150
}, {
    field: "From",
    headerName: 'Category',
    width: 150
},
{
    field: "Date",
    headerName: "From",
    width: 150
}
    ,
{
    field: "stage",
    headerName: "Stage",
    width: 150
}
]

export const completedTemplatesColumns: GridColDef[] = [{
    field: "name",
    headerName: 'Name',
    width: 150
}, {
    field: "category",
    headerName: 'Category',
    width: 150
},
{
    field: "producer",
    headerName: "Producer",
    width: 150
}
    ,
{
    field: "stage",
    headerName: "Stage",
    width: 150
}
]

export const fromClientTemplatesColumns: GridColDef[] = [{
    field: "name",
    headerName: 'Name',
    width: 150
}, {
    field: "category",
    headerName: 'Category',
    width: 150
},
{
    field: "Client",
    headerName: "Producer",
    width: 150
}
    ,
{
    field: "stage",
    headerName: "Stage",
    width: 150
}
]

export const editionTemplatesColumns: GridColDef[] = [{
    field: "name",
    headerName: 'Name',
    width: 150
}, {
    field: "client",
    headerName: 'Category',
    width: 150
},
{
    field: "producer",
    headerName: "Producer",
    width: 150
}
    ,
{
    field: "stage",
    headerName: "Stage",
    width: 150
}
]