
import PageHeader from "../../../../shared/header/header"
import "./promotions-list.css"

const PromotionsList = () => {
    return (
        <div className="page-content promotions-list-page">
            <div className="section header">
                <PageHeader/>
            </div>

            <div className="section filter">Promotions table</div>
            <div className="section actions">Action </div>
            <div className="section list">Feature access</div>
            <div className="section paginator">Paginator</div>
        </div>
    )
}

export default PromotionsList