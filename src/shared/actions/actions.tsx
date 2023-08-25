import { Button, ButtonGroup } from "@mui/material"
import { Add, Block, Clear, Delete, Edit, Save } from '@mui/icons-material';
import "./actions.css"

const Actions = (props: any) => {
    return (<div className="actions-content">
        <ButtonGroup  variant="contained" >
           
       {props.add && <Button startIcon={<Add />} onClick={props.add}>New</Button>} 
       {props.edit && <Button startIcon={<Edit />} onClick={props.edit}>Edit</Button>} 
       {props.delete && <Button startIcon={<Delete />} onClick={props.delete}>Del</Button>}

       {props.reset && <Button startIcon={<Clear />} onClick={props.reset}>Clear</Button>}
       {props.cancel && <Button startIcon={<Block />} onClick={props.cancel}>Cancel</Button>}
       {props.save && <Button startIcon={<Save />} onClick={props.save}>Save</Button>}

           
        </ButtonGroup>
    </div>)
}

export default Actions