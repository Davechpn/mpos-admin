import PageHeader  from "../../../shared/header/header"
import  "./guide.css"

const Guide = ()=>{
    return (
        <div className="page-content guide-page">
        <div className="section header">
          <PageHeader/>
        </div>
  
        <div className="section filter">Filter / Sort</div>
        <div className="section list">Payments list</div>
     
  
      </div>
    )
}

export default Guide