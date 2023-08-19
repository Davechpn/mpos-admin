import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useContext, useState } from 'react';
import MessagesContext from '../../../../contexts/messages.provider';

const NewTask = (props: any) => {
  const open  = props.open
  const [summary, setSummary] = useState<any>(null)
  const [stage, setStage] = useState<any>('todo')



  const handleSave = () => {
    // setOpen(false);
    console.log("run close")
    if(summary){
        const team = {
            summary: summary,
            stage: stage,
            timestamp: new Date().getTime() / 1000,
            country: "",
            completed_on: null,
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
        <DialogTitle>New Tasks</DialogTitle>
        <DialogContent>
     
          <div>

                    <TextField id="email-input" label="Summary"
                        variant="standard"
                        fullWidth
                        value = {summary}
                        onChange={(event) => setSummary(event.target.value)}
                    />
                         
                    <TextField id="email-input" label="Stage"
                        variant="standard"
                        fullWidth
                        value = {stage}
                        onChange={(event) => setStage(event.target.value)}
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


export default NewTask