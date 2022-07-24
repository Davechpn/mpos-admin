import Header from "../../../components/header"
import "./brands-list.css"

const BrandsList = () => {
   return (
      <div className="page-content brands-list-page">
         <div className="section header">
            <Header />
         </div>

         <div className="section search">Search</div>
         <div className="section filter">Filter  / Sort</div>
         <div className="section actions">Actions</div>
         <div className="section list">Brands list</div>
         <div className="section preview">Preview</div>
         <div className="section paginator">Paginator</div>

      </div>
   )
}

export default BrandsList