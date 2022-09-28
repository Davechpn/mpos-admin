import PageHeader from "../../../components/page-header/page-header"
import PeopleIcon from '@mui/icons-material/People';
import "./roles-list.css"
import { roles } from "../../../fake-db/roles";
import { Role } from "../../../types/roles";
import AccessRules from "./access-rules/access-rules";
import { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import Invitations from "./invitations/invitations";
import AddIcon from '@mui/icons-material/Add';
import Actions from "../../../components/actions/actions";



const RolesList = () => {
    const [selectedRole, setSelectedRole] = useState<Role>()

    const onDelete = ()=>{

    }

    const onEdit = ()=>{

    }

    return (
        <div className="page-content roles-list-page">
            <div className="header">
                <PageHeader title={'Roles - ' + selectedRole?.name} />
            </div>

            <div className="filter">
                {roles.map((role: Role) =>
                    <div key={role.id} className="role-item" onClick={() => setSelectedRole(role)}>
                        <div className="role-item-label">{role.name}</div>
                        <div className="role-item-actions">
                            {/* {role.count} &nbsp; */}
                        </div>
                    </div>
                )}

            </div>


            <div className="actions">
                <Actions delete={() => { onDelete() }} edit={onEdit} />
            </div>


            <div className="access-rules">
                <div className="section-header"> <span>Permissions</span>
                    {/* <div className="section-header-actions"> <EditIcon /></div> */}
                </div>
                {selectedRole && <AccessRules permissions={selectedRole.permissions} />}
            </div>

            <div className="invitations">
                <div className="section-header">
                    <span>Personnel</span>
                    <div className="section-header-actions"> <AddIcon /></div>
                </div>
                <Invitations />
            </div>


            <div className="desc">
                <div className="section-header">Description</div>
                {selectedRole?.description}
            </div>

        </div>
    )
}

export default RolesList