import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

const NewMember = (props: any) => {
  const open = props.open
  const [userName, setUserName] = useState<any>(null)
  const [userEmail, setUserEmail] = useState<any>(null)


  const handleSave = () => {
    // setOpen(false);
    console.log("run close")
    if (userEmail && userName) {
      const invitation = {
        name: userName,
        email: userEmail,
        avatar: null,
        cell: null,
        whatsapp_no: null,
        telegram_no: null,
        timestamp: new Date().getTime() / 1000,
        role_id: null,
        teams: [],
        status: "invited",
        country: "",
        suspended_on: null,
      }
      props.save(invitation)
    }

  };

  const handleCancel = () => {
    props.cancel()
  }

  return (
    <div>
      <Dialog open={open} onClose={handleCancel}>
        <DialogTitle>Add Staff</DialogTitle>
        <DialogContent>
          <div >

            <TextField id="email-input" label="Name"
              variant="standard"
              fullWidth
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
            />

            <TextField id="email-input" label="email"
              variant="standard"
              fullWidth
              value={userEmail}
              onChange={(event) => setUserEmail(event.target.value)}
            />


          </div>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleSave}>Invite</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


export default NewMember