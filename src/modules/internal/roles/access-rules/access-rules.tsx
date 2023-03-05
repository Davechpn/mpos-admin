import { Checkbox, FormControl, MenuItem } from "@mui/material"
import { useEffect, useState } from "react"
import "./access-rules.css"
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { green } from "@mui/material/colors";

const features_areas = [
    'dashboard',
    'roles',
    'teams',
    'centers',
    'offices',
    'premiums',
    'promos',
    'payments',
    'brands',
    'categories',
    'moderation',
    'feedback'
]

const AccessRules = (props: any) => {
    const [perms, setPerms] = useState<string[]>([])
    const [age, setAge] = useState('');

    console.log(props)
    const handleChange = (event: SelectChangeEvent, key:string) => {
        const new_value = {[key]:event.target.value}
        console.log(new_value)
        props.change(new_value)
    };


    return (<div className="access-rules-container">
        {
            features_areas.map((perm) =>
                <div key={perm} className="access-rules-item">
                    <div className="access-rule-role">{perm.charAt(0).toUpperCase() + perm.slice(1)}</div>

                    <FormControl variant="standard" sx={{ m: 0.4, minWidth: 120 }} style={{ fontSize: 10 }} size="small">
                        <Select
                            style={{ fontSize: 12 }}
                            id="dashboard_rule"
                            value={props.permissions[perm]}
                            onChange={($event)=>handleChange($event,perm)}>
                            <MenuItem value="no_access" style={{ fontSize: 12, color:"red" }}>None</MenuItem>
                            <MenuItem value="viewer" style={{ fontSize: 12 }}>Viewer</MenuItem>
                            <MenuItem value="editor" style={{ fontSize: 12, color:"orange" }}>Editor</MenuItem>
                            <MenuItem value="admin" style={{ fontSize: 12, color:"green" }}>Admin</MenuItem>
                        </Select>
                    </FormControl>


                </div>)
        }

    </div>)
}

export default AccessRules
