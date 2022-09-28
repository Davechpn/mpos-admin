import { Checkbox } from "@mui/material"
import { useEffect, useState } from "react"
import "./access-rules.css"

const AccessRules = (props: any) => {
    const [perms, setPerms] = useState<string[]>([])



    return (<div className="access-rules-container">
        {
           Object.keys(props.permissions).map((perm) => 
            <div key={perm} className="access-rules-item">
                <div className="access-rule-role">{perm.charAt(0).toUpperCase() + perm.slice(1)}</div>

                <div className="access-rule-label">
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
                </div>

            </div>)
        }

    </div>)
}

export default AccessRules
