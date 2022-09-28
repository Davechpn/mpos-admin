import PageHeader from "../../../components/page-header/page-header"
import "./premiums-list.css"

const PremiumsList = () => {
   return (
      <div className="page-content premiums-list-page">
         <div className="section header">
            <PageHeader/>
         </div>

         <div className="section filter">Premiums table</div>
         <div className="section actions">Action </div>
         <div className="section list">Feature access</div>
         <div className="section paginator">Paginator</div>
      </div>
   )
}

export default PremiumsList