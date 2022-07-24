import { Link } from "react-router-dom"
import { AccessTime, Fax , Dashboard,Book, Engineering, People, Store, Category, Sell, LocalMall, MoneyOff, Payment } from '@mui/icons-material';
import "./sidebar.css"

const Sidebar = () => {
    return (
        <div className="sidebar-content">
            <div></div>

            <div>

                <div className="link-header">INTERNAL</div>

                <ul>
                    <li><Link to="/"> <Dashboard /> Dashboad</Link></li>
                    <li><Link to="/internal/staff"> <Engineering/> Staff</Link></li>
                    <li><Link to="/internal/roles"> <AccessTime/> Roles</Link></li>
                    <li><Link to="/internal/teams"> <People/> Teams</Link></li>
                </ul>


                <div className="link-header">BUSINESSES</div>
                <ul>
                    <li><Link to="/businesses/centers"><Store/>Centers</Link></li>
                    <li><Link to="/businesses/main-offices"><Fax/> Main Offices</Link></li>
                </ul>



                <div className="link-header">PRODUCTS</div>
                <ul>
                    <li><Link to="/products/brands"><LocalMall/>Brands</Link></li>
                    <li><Link to="/products/categories"><Category/>Categories</Link></li>
                </ul>


                <div className="link-header">FEATURES</div>
                <ul>
                    <li><Link to="/features/premiums"><Sell/>Premiums</Link></li>
                    <li><Link to="/features/promotions"><MoneyOff/>Promotions</Link></li>
                </ul>


                <div className="link-header">SUBSCRIPTIONS</div>
                <ul>
                    <li><Link to="subscriptions/payments"><Payment/> Payments</Link></li>
                    <li><Link to="subscriptions/guidelines"><Book/> Guidlines</Link></li>
                </ul>
            </div>


        </div>)
}

export default Sidebar