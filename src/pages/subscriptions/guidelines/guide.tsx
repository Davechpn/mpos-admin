import Header from "../../../components/header"
import  "./guide.css"

const Guide = ()=>{
    return (
        <div className="page-content guide-page">
        <div className="section header">
          <Header />
        </div>
  
        <div className="section filter">Filter / Sort</div>
        <div className="section list">Payments list</div>
     
  
      </div>
    )
}

export default Guide