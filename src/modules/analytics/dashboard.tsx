import PageHeader from "../../shared/header/header"
import citiesData from "../../fake-db/cities-data"
import ActivityLine from "./activity-charts/activities.line"
import activityData from "../../fake-db/activity-data"
import CitiesBar from "./cities-charts/cities.bar"

import "./dashboard.css"
import IndustriesPie from "./industries-charts/industries.pie"
import industryData from "../../fake-db/industries-data"

const Dashboard = () =>{

  return (
 
    <div className="page-content dash-page">
      <div className=" header">
        <PageHeader title="Dasboard"/>
      </div>
      


      <div className="section counter counter-centers">
        <div className="counter-total">50</div>
        <div className="counter-label">Bussiness Centers</div>
      </div>
      <div className="section counter counter-brands">
        <div className="counter-total">600</div>
        <div className="counter-label">Captured Brands</div>
      </div>

   

      <div className=" cities-graph">
      
       <IndustriesPie data = {industryData}/>
      </div>
      <div className=" subs-graph">
        {/* Subscriptions / adoption line graph */}
        <CitiesBar data={citiesData}/>
      </div>
      <div className=" industry-graph">
      
      <ActivityLine data = { activityData }/>
        </div>


    </div>
  )
}

export default Dashboard