import Header from "../../../components/header"
import "./roles-list.css"

const RolesList = () => {
    return (
        <div className="page-content roles-list-page">
            <div className="section header">
                <Header />
            </div>

            <div className="section filter">Roles</div>
            <div className="section actions">Action </div>
            <div className="section list">Access rules</div>

        </div>
    )
}

export default RolesList