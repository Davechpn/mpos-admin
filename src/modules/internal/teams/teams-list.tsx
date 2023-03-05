import { Add, Close, Done, Edit } from "@mui/icons-material"
import { useEffect, useState } from "react"
import Actions from "../../../shared/actions/actions"
import PageHeader from "../../../shared/header/header"
import { Team } from "../../../types/team"
import Users from "../../../shared/users/users"
import "./teams-list.css"
import { addDoc, collection, query, onSnapshot } from "firebase/firestore";
import { firestore_db } from "../../../firebase"
import NewTeam from "./new-team"




const TeamsList = () => {
    const [selectedTeam, setSelectedTeam] = useState<any>()
    const [teams, setTeams] = useState([])
    const [openNew, setOpenNew] = useState(false)
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
            if (!selectedTeam && teams.length > 0) {
                setSelectedTeam(teams[0])
            }
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

    const saveNewTeam = (team: any) => {
        console.log('sending team', team)
        const teamsRef = collection(firestore_db, 'teams');
        addDoc(teamsRef, team)
        setOpenNew(false)
    }


    return (
        <div className="page-content teams-list-page">
            <div className="header">
                <PageHeader title="Teams" />

            </div>

            <div className="search"></div>

            <div className="actions">
                <Actions delete={() => { onDelete() }} add={onAdd} />
                <NewTeam save={saveNewTeam} open={openNew} cancel={() => setOpenNew(false)} />
            </div>

            <div className="filter internals-filter">
                {teams.map((team: Team) =>
                    <div key={team.id} className="role-item" onClick={() => setSelectedTeam(team)}>
                        <div className="role-item-label">{team.name}</div>
                        <div className="role-item-actions">
                            {/* {role.count} &nbsp; */}
                        </div>
                    </div>
                )}

            </div>


            <div className="list">
                <Users domain={{ space: "team", name: selectedTeam?.name, id: selectedTeam?.id }} domain_id={selectedTeam?.id} />
            </div>
            <div className="preview">
                <div className="section-header"> <span>Goals</span>
                    <div>
                        <Edit fontSize="small" />
                        <Done fontSize="small" />
                        <Close fontSize="small" />
                    </div>
                </div>
                <div className="goal-text">{selectedTeam?.goal}</div>
            </div>
        </div>
    )
}
export default TeamsList