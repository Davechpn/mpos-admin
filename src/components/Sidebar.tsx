import { orange } from "@mui/material/colors"
import { Link } from "react-router-dom"

const Sidebar = () => {
   return (<div style={{ background: 'orange' }} className="rounded-full">
   
    <ul>
        <li><Link to="/">Dashboard</Link></li>

        <li>INTERNAL</li>
        <li><Link to="/internal/staff">Staff</Link></li>
        <li><Link to="/internal/roles">Roles</Link></li>
        <li><Link to="/internal/teams">Teams</Link></li>
       
        <li>BUSINESSES</li>
        <li><Link to="/businesses/centers">Centers</Link></li>
        <li><Link to="/businesses/main-offices">Main Offices</Link></li>
       

        <li>PRODUCTS</li>
        <li><Link to="/products/brands">Brands</Link></li>
        <li><Link to="/products/categories">Categories</Link></li>

        <li>FEATURES</li>
        <li><Link to="/features/premiums">&nbsp;Premiums</Link></li>
        <li><Link to="/features/promotions">&nbsp;Promotions</Link></li>

        <li>SUBSCRIPTIONS</li>
        <li><Link to="subscriptions/payments">&nbsp; Payments</Link></li>
        <li><Link to="subscriptions/guidelines">&nbsp; Guidlines</Link></li>
    </ul>
   
   </div>)
}

export default Sidebar