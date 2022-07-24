import { Routes, Route } from "react-router-dom"
import Sidebar from "../components/sidebar"
import Topbar from "../components/topbar"
import Dashboard from "../pages/analytics/dashboard"
import "./layout.css"

const Layout = () => {
    return (<div className="layout">
        <div className="sidebar bg-indigo-900">
           <Sidebar />
        </div>
        <div className="topbar">
           <Topbar />
        </div>
        <div className="page rounded p-8">
            <Routes>
                <Route path="/" element={<Dashboard />}></Route>   
            </Routes>
        </div>

    </div>)
}

export default Layout 