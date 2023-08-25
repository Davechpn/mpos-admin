import { GridColDef } from "@mui/x-data-grid";

export const draftTemplatesColumns: GridColDef[] = [{
    field: "name",
    headerName: 'Name',
    width: 150
}, {
    field: "draft_type",
    headerName: 'Status',
    width: 150
},
{
    field: "Source",
    headerName: 'Source',
    width: 150
},
{
    field: "date",
    headerName: 'Date',
    width: 150
}

]

export const unModeratedTemplatesColumns: GridColDef[] = [{
    field: "name",
    headerName: 'Name',
    width: 150
},
{
    field: "Source",
    headerName: 'Source',
    width: 150
}, {
    field: "From",
    headerName: 'Submited By',
    width: 150
},
{
    field: "Date",
    headerName: "Date",
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
    field: "reviewer",
    headerName: "Reviewer",
    width: 150
}
    ,
{
    field: "date",
    headerName: "Date",
    width: 150
}
]


