import { Routes, Route } from "react-router-dom"
import Sidebar from "../components/sidebar/sidebar"
import Topbar from "../components/topbar/topbar"
import Dashboard from "../pages/analytics/dashboard"
import CentersList from "../pages/businesses/centers/centers-list"
import MainOfficesList from "../pages/businesses/main-offices/main-offices-list"
import PremiumsList from "../pages/features/premiums/Premiums-list"
import PromotionsList from "../pages/features/promotions/promotions-list"
import Profile from "../pages/internal/profile/profile"
import RolesList from "../pages/internal/roles/roles-list"
import TeamsList from "../pages/internal/teams/teams-list"
import BrandsList from "../pages/presets/brands/brand-list/brands-list"
import BrandNew from "../pages/presets/brands/brand-new/brand-new"
import CategoriesList from "../pages/presets/categories/categories-list"
import Guide from "../pages/subscriptions/guidelines/guide"
import PaymentsList from "../pages/subscriptions/payments/payments-list"
import "./layout.css"

const Layout = () => {
    
    return (<div className="layout">
        <div className="sidebar">
           <Sidebar />
        </div>
        <div className="topbar">
           <Topbar />
        </div>
        <div className="page p-4">
            <Routes>
                <Route path="/" element={<Dashboard />} />  
                <Route path="/internal/roles" element={<RolesList/>} />
                <Route path="/profile/:id" element={<Profile/>} />
                <Route path="/internal/teams" element={<TeamsList/>} />
                <Route path="/businesses/centers" element={<CentersList/>} />
                <Route path="/businesses/main-offices" element =  {<MainOfficesList/>} />
                <Route path="/features/premiums" element={<PremiumsList/>}/>
                <Route path="/features/promotions" element={<PromotionsList/>}/>
                <Route path="/presets/brands" element={<BrandsList/>}/>
                <Route path="/presets/brands/new" element={<BrandNew/>}/>
                <Route path="/presets/categories" element={<CategoriesList/>}/>
                <Route path="/subscriptions/payments" element={<PaymentsList/>}/>
                <Route path="/subscriptions/guidelines" element={<Guide/>}/>
                

            </Routes>
        </div>

    </div>)
}

export default Layout 