import PageHeader from "../../../components/page-header/page-header"
import "./main-offices-list.css"

const MainOfficesList = () => {
    return (
        <div className="page-content main-offices-list-page">
            <div className="section header">
                <PageHeader/>
            </div>

            <div className="section search">Search</div>
            <div className="section actions">Actions</div>
            <div className="section list">Main Offices list</div>
            <div className="section paginator">Paginator</div>
            <div className="section preview">Paginator</div>

        </div>
    )
}


export default MainOfficesList