import { Routes, Route } from "react-router-dom"
import Chatstrip from "../../shared/chat/chat-strip"
import Sidebar from "../../shared/sidebar/sidebar"
import Topbar from "../../shared/topbar/topbar"
import Dashboard from "../../modules/analytics/dashboard"
import CentersList from "../../modules/businesses/centers/centers-list"
import MainOfficesList from "../../modules/businesses/main-offices/main-offices-list"
import PremiumsList from "../../modules/features/premiums/Premiums-list"
import PromotionsList from "../../modules/features/promotions/promotions-list"
import Profile from "../../modules/internal/profile/profile"
import RolesList from "../../modules/internal/roles/roles-list"
import TeamsList from "../../modules/internal/teams/teams-list"
import BrandsList from "../../modules/presets/brands/brand-list/brands-list"
import BrandNew from "../../modules/presets/brands/brand-new/brand-new"
import CategoriesList from "../../modules/presets/categories/categories-list"
import Guide from "../../modules/subscriptions/guidelines/guide"
import PaymentsList from "../../modules/subscriptions/payments/payments-list"
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
                <Route path="/internal/roles" element={<RolesList />} />
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="/internal/teams" element={<TeamsList />} />
                <Route path="/businesses/centers" element={<CentersList />} />
                <Route path="/businesses/main-offices" element={<MainOfficesList />} />
                <Route path="/features/premiums" element={<PremiumsList />} />
                <Route path="/features/promotions" element={<PromotionsList />} />
                <Route path="/presets/brands" element={<BrandsList />} />
                <Route path="/presets/brands/new" element={<BrandNew />} />
                <Route path="/presets/categories" element={<CategoriesList />} />
                <Route path="/subscriptions/payments" element={<PaymentsList />} />
                <Route path="/subscriptions/guidelines" element={<Guide />} />


            </Routes>
        </div>
        <div className="chatbar">
            <Chatstrip />
        </div>

    </div>)
}

export default Layout 