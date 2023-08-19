import { Link } from "react-router-dom"
import { AccessTime, Fax, Dashboard, Book, People, Store, Category, Sell, LocalMall, MoneyOff, Payment } from '@mui/icons-material';
import ChatIcon from '@mui/icons-material/Chat';
import "./sidebar.css"
import AuthContext from "../../contexts/auth.provider";
import { useContext } from "react";

const Sidebar = () => {
    const { permissions } = useContext(AuthContext)

    return (
        <div className="sidebar-content">
            <div className="text-3xl">
                MPOS
            </div>

            <div>

                <div className="link-header" >INTERNAL <span className="tech-tag">GraphQL</span></div>

                <ul>
                    {permissions?.dashboard.isViewer && <li><Link to="/"> <Dashboard /> DASHBOARD </Link></li>}
                    {permissions?.teams.isViewer && <li><Link to="/internal/teams"> <People /> TEAMS</Link></li>}
                    <li><Link to="/internal/roles"> <AccessTime /> ROLES</Link></li>
                </ul>

                <div className="link-header">CLIENTS <span className="tech-tag">Rest</span></div>
                <ul>
                    {permissions?.centers.isViewer && <li><Link to="/businesses/centers"><Store />CENTERS</Link></li>}
                    {permissions?.offices.isViewer && <li><Link to="/businesses/main-offices"><Fax />MAIN OFFICES</Link></li>}

                </ul>
                <div className="link-header">FEATURES <span className="tech-tag">Websockets</span></div>
                <ul>
                    {permissions?.premiums.isViewer && <li><Link to="/features/premiums"><Sell />PREMIUMS</Link></li>}
                    {permissions?.promos.isViewer && <li><Link to="/features/promotions"><MoneyOff />PROMOS</Link></li>}
                    {permissions?.payments.isViewer && <li><Link to="subscriptions/payments"><Payment /> PAYMENTS</Link></li>}
                </ul>
                <div className="link-header">TEMPLATES <span className="tech-tag">Websockets</span></div>
                <ul>
                    {permissions?.brands.isViewer && <li><Link to="/templates/brands-templates"><LocalMall />BRANDS</Link></li>}
                    {permissions?.categories.isViewer && <li><Link to="/products/categories"><Category />CATEGORIES</Link></li>}
                </ul>




                <div className="link-header">SUPPORT <span className="tech-tag">GraphQL</span></div>
                <ul>
                    {permissions?.feedback.isViewer && <li><ChatIcon /> FEEDBACK</li>}
                </ul>
            </div>
            <div> <hr />
                <ul >
                    <li className="ml-0"><Link to="subscriptions/guidelines"> <Book /> GUIDES</Link></li>
                </ul>
            </div>


        </div>)
}

export default Sidebar