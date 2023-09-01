import { GridColDef } from "@mui/x-data-grid";

export const allFeaturesColumns: GridColDef[] = [{
    field: "name",
    headerName: 'Name',
    width: 150
}, {
    field: "type",
    headerName: 'Premium Type',
    width: 150
}

]

export const packagesColumns: GridColDef[] = [{
    field: "name",
    headerName: 'Name',
    width: 150
}, {
    field: "level",
    headerName: 'Level',
    width: 150
}
]

export const promotionsColumns: GridColDef[] = [{
    field: "name",
    headerName: 'Name',
    width: 150
}, {
    field: "start_date",
    headerName: 'Starts',
    width: 150
}, {
    field: "end_date",
    headerName: 'Ends',
    width: 150
}
]