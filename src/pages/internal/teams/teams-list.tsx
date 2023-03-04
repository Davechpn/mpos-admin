import { Add, Close, Done, Edit } from "@mui/icons-material"
import { useEffect, useState } from "react"
import Actions from "../../../components/actions/actions"
import PageHeader from "../../../components/page-header/page-header"
import { Team } from "../../../types/team"
import Members from "./members/members"
import Tasks from "./tasks/tasks"
import "./teams-list.css"
import { doc, setDoc, addDoc, collection, query, onSnapshot } from "firebase/firestore";
import { firestore_db } from "../../../firebase-setup/firebase"
import NewTeam from "./new-team"




const TeamsList = () => {
    const [selectedTeam, setSelectedTeam] = useState<any>(null)
    const [users,setUsers] = useState([])
    const [teams,setTeams] = useState([])
 

    const [openNew, setOpenNew] = useState(false)


    const usersRef = collection(firestore_db, 'users')
    const teamsRef = collection(firestore_db, 'teams')
    
    
    useEffect(() => {
        const queryTeams = query(teamsRef)
        onSnapshot(queryTeams, (snapshot) => {
            const teams: any[] = []
            snapshot.forEach(d => {
                teams.push({ ...d.data(), id: d.id })
            })
            setTeams(teams as any)
            console.log(teams)
        })

        const queryUsers = query(usersRef)
        onSnapshot(queryUsers, (snapshot) => {
            const users: any[] = []
            snapshot.forEach(d => {
                users.push({ ...d.data(), id: d.id })
            })
            setUsers(users as any)
            console.log('users',users)
        })

      

    }, [])


    const onAdd = () => {
        console.log('To add brand')
        // navigate('/products/brands/new')
        setOpenNew(true)
    }

    const onEdit = () => {
        console.log('go to edit')
    }

    const onDelete = () => {
        console.log('Deleting brand')
    }

    const onSearch = (searchValue: any) => {
        console.log(searchValue)
    }

    const saveNewTeam = (team:any)=>{
        console.log('sending team', team)
        const teamsRef = collection(firestore_db, 'teams');
        addDoc(teamsRef,team)  
        setOpenNew(false)
  }


    return (
        <div className="page-content teams-list-page">
            <div className="header">
                {!selectedTeam && <PageHeader title="Teams" />}
                {selectedTeam && <PageHeader title={selectedTeam.name} />}
            </div>

            <div className="search"></div>

            <div className="actions">
                <Actions delete={() => { onDelete() }} add={onAdd} />
                <NewTeam save={saveNewTeam} open={openNew} cancel={()=>setOpenNew(false)} />
            </div>

            <div className="filter internals-filter">
                <div className="role-item" onClick={() => setSelectedTeam(null)}>
                    <div className="role-item-label">All Employees</div>
                    <div className="role-item-actions">
                        {/* {role.count} &nbsp; */}
                    </div>
                </div>
                {teams.map((team: Team) =>
                    <div key={team.id} className="role-item" onClick={() => setSelectedTeam(team)}>
                        <div className="role-item-label">{team.name}</div>
                        <div className="role-item-actions">
                            {/* {role.count} &nbsp; */}
                        </div>
                    </div>
                )}

            </div>

            {/* For all Epmloyees ////////////////////////////////////////////// */}

            {!selectedTeam && <div className="list">
                <Members users={users} />
            </div>}

            {!selectedTeam && <div className="preview">
                <div className="section-header"> <span>Goals</span>
                    <div>
                        <Edit fontSize="small" />
                        <Done fontSize="small" />
                        <Close fontSize="small" />
                    </div>
                </div>
                <div className="goal-text">{selectedTeam?.goal}</div>

            </div>}

            {/* End For all Epmloyees ////////////////////////////////////////////// */}

            {/* For Teams ////////////////////////////////////////////// */}
            {selectedTeam && <div className="list">
             
                <Tasks />
            </div>}

            {selectedTeam && <div className="preview">
                <div className="section-header"> <span>Goal</span>
                    <div>
                        <Edit fontSize="small" />
                        <Done fontSize="small" />
                        <Close fontSize="small" />
                    </div>
                </div>
                <div className="goal-text">{selectedTeam?.goal}</div>
                <br />
                <br />
                <br />
             
                <Members users={users} />
            </div>}
            {/*End For all Teams ////////////////////////////////////////////// */}



        </div>
    )
}
export default TeamsList