import { Checkbox, FormControl, MenuItem } from "@mui/material"
import { useEffect, useState } from "react"
import "./access-rules.css"
import Select, { SelectChangeEvent } from '@mui/material/Select';

const AccessRules = (props: any) => {
    const [perms, setPerms] = useState<string[]>([])
    const [age, setAge] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };


    return (<div className="access-rules-container">
        {
            Object.keys(props.permissions).map((perm) =>
                <div key={perm} className="access-rules-item">
                    <div className="access-rule-role">{perm.charAt(0).toUpperCase() + perm.slice(1)}</div>

                    <FormControl  variant="standard" sx={{ m: 0.4, minWidth: 260 }} style={{fontSize:10}} size="small">
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={5}>Viewer</MenuItem>
                        <MenuItem value={10}>Editor</MenuItem>
                        <MenuItem value={20}>Admin</MenuItem>
                        <MenuItem value={30}>No Access</MenuItem>
                    </Select>
                    </FormControl>
                    {/* <div className="access-rule-label">
                    <Checkbox size="small" checked={props.permissions[perm].read} color="default"/>
                    <div className="access-rule">Read</div>
                </div>

                <div className="access-rule-label">
                    <Checkbox size="small" checked={props.permissions[perm].write} color="default"/>
                    <div className="access-rule">Write</div>
                </div>

                <div className="access-rule-label">
                    <Checkbox size="small" checked={props.permissions[perm].edit} color="default"/>
                    <div className="access-rule">Edit</div>
                </div>

                <div className="access-rule-label">
                    <Checkbox size="small" checked={props.permissions[perm].delete} color="default" />
                    <div className="access-rule">Del</div>
                </div> */}

                </div>)
        }

    </div>)
}

export default AccessRules
