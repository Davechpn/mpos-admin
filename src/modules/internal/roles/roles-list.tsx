import PageHeader from "../../../shared/header/header"
import "./roles-list.css"
import { Role } from "../../../types/roles";
import AccessRules from "./access-rules/access-rules";
import { useEffect, useRef, useState } from "react";

import Actions from "../../../shared/actions/actions";
import { Add, Close, Done, Edit } from "@mui/icons-material";
import NewRole from "./new-role";
import { firestore_db } from "../../../firebase";
import { addDoc, collection, doc, onSnapshot, query, updateDoc } from "firebase/firestore";

import Users from "../../../shared/users/users";



const RolesList = () => {
    const [selectedRole, setSelectedRole] = useState<Role>()
    const [roles,setRoles] = useState([])
    const [openNewRole, setOpenNewRole] = useState<any>(false)
    const rolesRef = collection(firestore_db, 'roles')
    

    useEffect(() => {
        const queryRoles = query(rolesRef)
        onSnapshot(queryRoles, (snapshot) => {
            const roles: any[] = []
            snapshot.forEach(d => {
                roles.push({ ...d.data(), id: d.id })
            })
            setRoles(roles as any)
            if(!selectedRole && roles.length > 0){
                setSelectedRole(roles[0])
            }
        })

    }, [])

    const onDelete = () => {

    }

    const onEdit = () => {

    }

    const onAdd = () => {
          setOpenNewRole(true)
    }

    const onSave = (role:any) =>{
        console.log("saving role",role)
        const rolesRef = collection(firestore_db, 'roles');
        addDoc(rolesRef,role)  
        setOpenNewRole(false)
    }
    

    const updatePermissions = (update:any)=>{
        
        const new_perms = {...selectedRole?.permissions,...update }
        console.log('new perms',new_perms)

        const roleRef = doc(firestore_db, 'roles', String(selectedRole?.id));
        updateDoc(roleRef, {
         permissions: new_perms,
        }).then(c=>{
        })
        let r =  {...selectedRole, permissions:new_perms}
        setSelectedRole(r as any)
        
    }


    return (
        <div className="page-content roles-list-page">
            <div className="header">
            
                    <PageHeader title='Roles' />
        
            </div>

            <div className="filter internals-filter">

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
                <Actions delete={() => { onDelete() }} add={onAdd} />
                
            </div>
            <NewRole open={openNewRole} save={onSave} cancel={()=>setOpenNewRole(false)}/>

            <div className="access-rules">
                {selectedRole &&
                    <div className="section-header">
                        <span>Permissions</span>
                        <div>
                            <Edit fontSize="small" />
                            <Done fontSize="small" />
                            <Close fontSize="small" />
                        </div>
                    </div>}
                {selectedRole && <AccessRules change={updatePermissions} permissions={selectedRole.permissions} />}
            </div>

            <div className="invitations">
               <Users domain={{space:"role",name:selectedRole?.name,id:selectedRole?.id}} domain_id={selectedRole?.id} />
            </div>



        </div>
    )
}

export default RolesList