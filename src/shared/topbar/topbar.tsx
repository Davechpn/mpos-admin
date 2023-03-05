import { Notifications, Person, Email, PersonAdd, Settings, Logout } from "@mui/icons-material"
import { MenuItem, Menu, Button, Tooltip, IconButton, Avatar, Divider, ListItemIcon, Badge } from "@mui/material"
import { useContext, useState } from "react"
import AuthContext from "../../contexts/auth.provider"
import MessagesContext from "../../contexts/messages.provider"
import { Message } from "../../types/message"

import "./topbar.css"

const Topbar = () => {
  const [anchorEl1, setAnchorEl1] = useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);
  const { addTab, setOpenTab, messages } = useContext(MessagesContext)
  const { auth } = useContext(AuthContext)



  const open1 = Boolean(anchorEl1);
  const open2 = Boolean(anchorEl2);



  const handleClick1 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };




  return (<div className="topbar-container border-black border-1 flex  h-full drop-shadow-sm">


    <div>
      <Tooltip title="New Messages">
        <IconButton
          onClick={handleClick1}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open1 ? 'messages-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open1 ? 'true' : undefined}
        >

          <Badge badgeContent={messages.length} color="primary">
            <Email />
          </Badge>

        </IconButton>

      </Tooltip>

      <Menu
        anchorEl={anchorEl1}
        id="messages-menu"
        open={open1}
        onClose={handleClose1}
        onClick={handleClose1}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              left: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      >
        <span style={{ margin: 8 }}>Messages</span>
        <Divider />

        {messages.map((message: any) =>
          <MenuItem key={message.id} onClick={() => addTab(message)}>
            <Avatar src={message.avatar} alt={message.sender_name} />
            <span style={{ fontSize: '0.8rem' }}>
              {message.text}
            </span>
          </MenuItem>
        )
        }


      </Menu>


    </div>

    <div className="top-bar-center-container">
      <div className="top-bar-center">
        1:24:00HR
      </div>
    </div>

    <div>


      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick2}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open2 ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open2 ? 'true' : undefined}
        >
          <Avatar sx={{ width: 32, height: 32 }}>{auth?.user?.name.substring(0, 1)}</Avatar>
        </IconButton>
      </Tooltip>


      <Menu
        anchorEl={anchorEl2}
        id="account-menu"
        open={open2}
        onClose={handleClose2}
        onClick={handleClose2}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>


    </div>



  </div>)
}

export default Topbar