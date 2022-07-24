import Header from "../../../components/header"
import "./categories-list.css"

const CategoriesList = () => {
  return (
    <div className="page-content categories-list-page">
      <div className="section header">
        <Header />
      </div>

      <div className="section search">Search</div>
      <div className="section filter">Filter  / Sort</div>
      <div className="section actions">Actions</div>
      <div className="section list">Categories list</div>
      <div className="section preview">Preview</div>
      <div className="section paginator">Paginator</div>

    </div>
  )
}

export default CategoriesList