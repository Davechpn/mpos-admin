import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

const NewTeam = (props: any) => {
  const open  = props.open
  const [name, setName] = useState<any>(null)
  const [goal, setGoal] = useState<any>(null)


  const handleSave = () => {
    // setOpen(false);
    console.log("run close")
    if(name && goal){
        const team = {
            name: name,
            goal: goal,
            timestamp: new Date().getTime() / 1000,
            status: "active",
            country: "",
            suspended_on: null,
        }
        props.save(team)
    }

  };

  const handleCancel = () => {
    props.cancel()
  }

  return (
    <div>
      <Dialog open={open} onClose={handleSave}>
        <DialogTitle>New Team</DialogTitle>
        <DialogContent>
     
          <div>

                    <TextField id="email-input" label="Name"
                        variant="standard"
                        fullWidth
                        value = {name}
                        onChange={(event) => setName(event.target.value)}
                    />
                         
                    <TextField id="email-input" label="Goal"
                        variant="standard"
                        fullWidth
                        value = {goal}
                        onChange={(event) => setGoal(event.target.value)}
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


export default NewTeam