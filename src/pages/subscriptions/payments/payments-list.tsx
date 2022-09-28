import PageHeader from "../../../components/page-header/page-header"
import "./payments-list.css"

const PaymentsList = ()=>{
   return (
      <div className="page-content payments-list-page">
      <div className="section header">
        <PageHeader/>
      </div>

      <div className="section filter">Filter / Sort</div>
      <div className="section actions">Actions</div>
      <div className="section list">Payments list</div>
      <div className="section preview">Preview</div>
      <div className="section paginator">Paginator</div>

    </div>
   )
}
export default PaymentsList