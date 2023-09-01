import { useState } from "react";
import PageHeader from "../../../shared/header/header"
import "./categories-list.css"
import { SidePaneView } from "../../../types/layout";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Actions from "../../../shared/actions/actions";
import { Categories } from "../../../fake-db/categories";
import CategoryForm from "./category-form";

const categories = Categories

const CategoriesList = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [sidePaneView, setSidePaneView] = useState(SidePaneView.New)

  const onAdd = () =>{
      console.log('adding payment')
      setSidePaneView(SidePaneView.New)
  }
  const onEdit = () =>{
      console.log('editing payment')
      setSidePaneView(SidePaneView.Edit)

  }
   return (
      <div className="page-content payments-list-page">
      <div className="header">
        <PageHeader title="Categories"/>
      </div>

         
  
      <div className="actions">
          <Actions add={onAdd} edit={onEdit}/>
      </div>
      <div className="list">
         <DataGrid
                rows={categories}
                columns={categoriesColumns}
                density='compact'
                onRowClick={({ row }) => { setSelectedCategory(row) }}
             />

      </div>
      <div className="preview">
          {sidePaneView === SidePaneView.Edit?
          <CategoryForm selectedCategory={selectedCategory}/>:
          <CategoryForm />
          }
       
      </div>

    </div>
   )
}

export default CategoriesList

const categoriesColumns: GridColDef[] = [{
  field: "name",
  headerName: 'Name',
  width: 150
}, {
  field: "created_by",
  headerName: 'Created By',
  width: 150
},
{
  field: "created_date",
  headerName: 'Date',
  width: 150
}
]