import Header from "../../components/header"
import "./dashboard.css"

const Dashboard = () =>{
  return (
    <div className="page-content dash-page">
      <div className="section header">
        <Header/>
      </div>
      


      <div className="section counter counter-centers">
        <div className="counter-total">50</div>
        <div className="counter-label">Bussiness Centers</div>
      </div>
      <div className="section counter counter-brands">
        <div className="counter-total">600</div>
        <div className="counter-label">Product Brands</div>
      </div>

   

      <div className="section cities-graph">Cities bar graph</div>
      <div className="section subs-graph">Subscriptions / adoption line graph</div>
      <div className="section industry-graph">Industries pie chat</div>


    </div>
  )
}

export default Dashboard