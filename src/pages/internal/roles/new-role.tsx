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
                dashboard: {
                    read: false,
                    write: false,
                    edit: false,
                    delete: false
                },
                roles: {
                    read: false,
                    write: false,
                    edit: false,
                    delete: false
                },
                teams: {
                    read: false,
                    write: false,
                    edit: false,
                    delete: false
                },
                centers: {
                    read: false,
                    write: false,
                    edit: false,
                    delete: false
                },
                main_offices: {
                    read: false,
                    write: false,
                    edit: false,
                    delete: false
                },
                premiums: {
                    read: false,
                    write: false,
                    edit: false,
                    delete: false
                },
                promos: {
                    read: false,
                    write: false,
                    edit: false,
                    delete: false
                },
                brands: {
                    read: true,
                    write: true,
                    edit: true,
                    delete: false
                },
                categories: {
                    read: true,
                    write: true,
                    edit: true,
                    delete: false
                },
                moderation: {
                    read: false,
                    write: false,
                    edit: false,
                    delete: false
                },
                payments: {
                    read: false,
                    write: false,
                    edit: false,
                    delete: false
                },
                guides: {
                    read: true,
                    write: false,
                    edit: false,
                    delete: false
                }}
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