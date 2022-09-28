import { gql, useQuery } from "@apollo/client"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { useState } from "react"
import PageHeader from "../../../components/page-header/page-header"
import usersData from "../../../fake-db/users"
import "./teams-list.css"


const columns: GridColDef[] = [{
    field: "name",
    headerName: 'Name',
    width: 150
 }, {
    field: "position",
    headerName: 'Position',
    width: 150
 },
 {
    field: "cell_no",
    headerName: "Cell No",
    width: 150
 }
 ]

const GET_USERS = gql`
query getUsers{
    users{
        id
      name
    }
  }
`

const TeamsList = () => {
    const [selected, setSelected] = useState(null)
    const { loading, error, data } = useQuery(GET_USERS)

    if (loading) return <p>Loading...</p>;
   if (error) return <p>Error :(</p>;

    const onAddNew = () => {
        console.log('To add brand')
        // navigate('/products/brands/new')
     }
  
     const onEdit = () =>{
        console.log('go to edit')
     }
  
     const onDelete = (selected: any) => {
        console.log('Deleting brand', selected)
     }
  
     const onSearch = (searchValue:any)=>{
        console.log(searchValue)
     }
  

    return (
        <div className="page-content teams-list-page">
            <div className="header">
                <PageHeader title="Teams" />
            </div>

            <div className="search"></div>
       
            <div className="section actions">Actions</div>
            <div className="section filter">Teams &amp; Depts</div>
            <div className=" list">
                <div className="section-title"></div>
                <DataGrid
                    rows={data?.users}
                    columns={columns}
                    density="standard"
                    onRowClick={(data: any) => { setSelected(data) }}
                />
            </div>
            <div className="section preview">Staff Preview</div>
            <div className="section paginator">footer</div>

        </div>
    )
}
export default TeamsList