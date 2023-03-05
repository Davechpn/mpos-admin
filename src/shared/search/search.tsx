import { Search } from "@mui/icons-material"
import "./search.css"
const LiveSearch = (props:any) => {
    return (<div className="search-container bg-slate-100">
        <input type="text" className="search-input" onChange={($event)=>props.search($event.target.value)}></input>
        <Search/>
    </div>)
}

export default LiveSearch