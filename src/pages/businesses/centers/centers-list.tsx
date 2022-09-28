import { gql, useQuery } from "@apollo/client"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { useState } from "react"
import PageHeader from "../../../components/page-header/page-header"
import centersData from "../../../fake-db/centers"
import "./centers-list.css"
import map from "./map.png"

const columns: GridColDef[] = [{
  field: "name",
  headerName: 'Name',
  width: 150
}, {
  field: "street_address",
  headerName: 'Street ad',
  width: 150
},
{
  field: "residence",
  headerName: "Residence",
  width: 150
},
{
  field: "city",
  headerName: "City",
  width: 150
}
]

const GET_CENTERS = gql`
query getCenters{
    centers{
        id
      name
      residence
      city
    }
  }
`

const CentersList = () => {
  const [selected, setSelected] = useState(null)
  const { loading, error, data } = useQuery(GET_CENTERS);
   
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  
  return (
    <div className="page-content centers-page">
      <div className=" header">
        <PageHeader title="Centers"/>
      </div>

      <div className=" search"></div>
      <div className="section actions">Actions</div>
      <div className="list">
        <DataGrid
          rows={data.centers}
          columns={columns}
          density="standard"
          onRowClick={(data: any) => { setSelected(data) }}
        />
      </div>
      <div className=" filter">
        <img className="map" src={map}/>
      </div>
      <div className="section paginator">Footer</div>

    </div>
  )
}


export default CentersList