import Header from "../../../components/header"
import "./centers-list.css"

const CentersList = ()=>{
    return (
        <div className="page-content centers-page">
        <div className="section header">
          <Header/>
        </div>
    
        <div className="section search">Search</div>
        <div className="section filter">Filter / Sort</div>
        <div className="section actions">Actions</div>
        <div className="section list">Centers list</div>
        <div className="section paginator">Paginator</div>
    
      </div>
    )
}


export default CentersList