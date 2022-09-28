import { Book, Notifications, Person } from "@mui/icons-material"
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material"
import { height } from "@mui/system"
import { useContext } from "react"
import { Link } from "react-router-dom"
import AuthContext from "../../context/auth.provider"
import "./topbar.css"

const Topbar = () => {
  const {auth} = useContext(AuthContext
    )
  return (<div className="topbar-container border-black border-1 flex flex-row-reverse h-full drop-shadow-sm">

    <div className="flex text-gray-500">
   
      <Notifications /> &nbsp;
      <div>{auth?.user?.name}</div>
      <Person />

    </div>

  </div>)
}

export default Topbar