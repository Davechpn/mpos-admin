
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Actions from "../../../../components/actions/actions"
import PageHeader from "../../../../components/page-header/page-header"
import LiveSearch from "../../../../components/search/search"
import { brand_list } from "../../../../fake-db/brands"
import BrandDetails from "../brand-details/brand-details"
import { useQuery, gql } from '@apollo/client';
import "./brands-list.css"

const brands = brand_list


const columns: GridColDef[] = [{
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
]

const GET_LOCATIONS = gql`
query GetBrands {
   brands{
     id
     name
     image
     category
     producer
   }
 }
`;

// function DisplayLocations() {
//    const { loading, error, data } = useQuery(GET_LOCATIONS);
 
//    if (loading) return <p>Loading...</p>;
//    if (error) return <p>Error :(</p>;
//  console.log(data)
//    return data.brands.map((l:any) => (
//      <div key={l.name}>
//        <h3>{l.name}</h3>
//        <img width="400" height="250" alt="location-reference" src={`${l.image}`} />
//        <br />
      
//      </div>
//    ));
//  }

const BrandsList = () => {

   const [selected, setSelected] = useState(null)
   const navigate = useNavigate()
   const { loading, error, data } = useQuery(GET_LOCATIONS);
   
   if (loading) return <p>Loading...</p>;
   if (error) return <p>Error :(</p>;

   const onAddNew = () => {
      console.log('To add brand')
      navigate('/products/brands/new')
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
      <div className="page-content brands-list-page">
         <div className="header">
            <PageHeader title="Brands" />
         </div>

         <div className="search">
            <LiveSearch search={onSearch}/>
         </div>

         <div className="actions">
            <Actions delete={() => { onDelete(selected) }} add={onAddNew} edit={onEdit} />
         </div>

         <div className=" list">
            <DataGrid
               rows={data.brands}
               columns={columns}
               density="standard"
               onRowClick = {(data:any)=>{setSelected(data)}}
            />

         </div>

         <div className="prev">
         { selected && <BrandDetails brand={selected}/>}  
         </div>
        

      </div>
   )
}

export default BrandsList