import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material"
import { height } from "@mui/system"
import { Link } from "react-router-dom"


const Topbar = () => {
    return (<div style={{border:'1px solid #ccc', height:'56px'}}>
  
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
             color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

    </div>)
}

export default Topbar