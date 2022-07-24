import { Link } from "react-router-dom"
import { AccessTime, Fax, Dashboard, Book, Engineering, People, Store, Category, Sell, LocalMall, MoneyOff, Payment } from '@mui/icons-material';
import "./sidebar.css"

const Sidebar = () => {
    return (
        <div className="sidebar-content">
            <div></div>

            <div>

                <div className="link-header">INTERNAL</div>

                <ul>
                    <li><Link to="/"> <Dashboard /> DASHBOARD</Link></li>
                    <li><Link to="/internal/roles"> <AccessTime /> ROLES</Link></li>
                    <li><Link to="/internal/teams"> <People /> TEAMS</Link></li>
                </ul>


                <div className="link-header">BUSINESSES</div>
                <ul>
                    <li><Link to="/businesses/centers"><Store />CENTERS</Link></li>
                    <li><Link to="/businesses/main-offices"><Fax />MAIN OFFICES</Link></li>
                </ul>



                <div className="link-header">PRODUCTS</div>
                <ul>
                    <li><Link to="/products/brands"><LocalMall />BRANDS</Link></li>
                    <li><Link to="/products/categories"><Category />CATEGORIES</Link></li>
                </ul>


                <div className="link-header">FEATURES</div>
                <ul>
                    <li><Link to="/features/premiums"><Sell />PREMIUMS</Link></li>
                    <li><Link to="/features/promotions"><MoneyOff />PROMOS</Link></li>
                </ul>


                <div className="link-header">SUBSCRIPTIONS</div>
                <ul>
                    <li><Link to="subscriptions/payments"><Payment /> PAYMENTS</Link></li>

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