import { Book, Notifications, Person } from "@mui/icons-material"
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material"
import { height } from "@mui/system"
import { Link } from "react-router-dom"
import "./topbar.css"

const Topbar = () => {
  return (<div className="topbar-container border-black border-1 flex flex-row-reverse h-full drop-shadow-sm">

    <div className="flex text-gray-500">
   
      <Notifications /> &nbsp;
      <div>Adminstrator</div>
      <Person />

    </div>

  </div>)
}

export default Topbar