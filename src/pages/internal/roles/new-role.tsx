import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

const NewRole = (props: any) => {
  const open  = props.open
  const [name, setName] = useState<any>(null)
  const [description, setDescription] = useState<any>(null)


  const handleSave = () => {
    // setOpen(false);
    console.log("run close")
    if(name){
        const role = {
            name: name,
            description: description,
            timestamp: new Date().getTime() / 1000,
            status: "active",
            country: "",
            suspended_on: null,
            permissions: {
                dashboard:"no_access",
                roles: "no_access",
                teams: "no_access",
                centers: "no_access",
                offices: "no_access",
                premiums: "no_access",
                promos: "no_access",
                brands: "no_access",
                categories: "no_access",
                moderation: "no_access",
                payments: "no_access",
                guides: "no_access",
                feedback: "no_access",
            }
        }
        props.save(role)
    }

  };

  const handleCancel = () => {
    props.cancel()
  }

  return (
    <div>
      <Dialog open={open} onClose={handleSave}>
        <DialogTitle>New Role</DialogTitle>
        <DialogContent>
     
          <div>

                    <TextField id="email-input" label="Name"
                        variant="standard"
                        fullWidth
                        value = {name}
                        onChange={(event) => setName(event.target.value)}
                    />
                         
                    <TextField id="email-input" label="Descrption"
                        variant="standard"
                        fullWidth
                        value = {description}
                        onChange={(event) => setDescription(event.target.value)}
                    />


                </div> 
      
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


export default NewRole