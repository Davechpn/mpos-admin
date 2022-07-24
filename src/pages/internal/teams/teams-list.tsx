import Header from "../../../components/header"
import "./teams-list.css"
const TeamsList = () => {
    return (
        <div className="page-content teams-list-page">
            <div className="section header">
                <Header />
            </div>

            <div className="section search">Search</div>
            <div className="section filter">Teams <br /> &amp; description </div>
            <div className="section actions">Actions</div>
            <div className="section list"> Staff list</div>
            <div className="section preview">Staff Preview</div>
            <div className="section paginator">Paginator</div>

        </div>
    )
}
export default TeamsList