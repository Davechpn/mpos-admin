import Header from "../../../components/header"
import "./main-offices-list.css"

const MainOfficesList = () => {
    return (
        <div className="page-content main-offices-list-page">
            <div className="section header">
                <Header />
            </div>

            <div className="section search">Search</div>
            <div className="section filter">Filter  / Sort</div>
            <div className="section actions">Actions</div>
            <div className="section list">Main Offices list</div>
            <div className="section paginator">Paginator</div>

        </div>
    )
}


export default MainOfficesList