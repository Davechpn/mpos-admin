import PageHeader from "../../../shared/header/header"
import "./profile.css"
import avatar from "./avatar.jpg"
import { ResponsiveCalendar } from '@nivo/calendar'
import { CloakingCalender } from "./calendar-chat/calendar"
import Actions from "../../../shared/actions/actions"

const Profile = () => {

  const onDelete = () => {

  }
  const onEdit = () => {

  }

  return (
    <div className="page-content profile-list-page">
      <div className="header">
        <PageHeader title="David Chipundo" />
      </div>

      <div className="search"></div>

      <div className="actions">
        <Actions delete={() => { onDelete() }} edit={onEdit} />
      </div>


      <div className="filter">
        <img src={avatar} />
        <table>

          <tr>
            <td>Email</td>
            <td>:</td>
            <td>chipundodavid@gmail.com</td>
          </tr>
          <tr>
            <td>Role</td>
            <td>:</td>
            <td>Sales &amp; Marketing</td>
          </tr>

          <tr>
            <td>Joined</td>
            <td>:</td>
            <td>2 jan 2023</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>:</td>
            <td>Zimbabwe</td>
          </tr>
          <tr>
            <td>Teams</td>
            <td>:</td>
            <td></td>
          </tr>
        </table>
      </div>

      <div className="section earnings">
        <div className="section-header">
          <span>Earnings and Rates</span>
        </div>
      </div>
      <div className="contacts">
        <div className="section-header">
          <span>Contact Info</span>
        </div>
        <table>
          <tr>
            <td>Cell</td>
            <td>:</td>
            <td>+24533777665</td>
          </tr>
          <tr>
            <td>Tell</td>
            <td>:</td>
            <td>24667</td>
          </tr>

          <tr>
            <td>Address</td>
            <td>:</td>
            <td>24 dawnhill city country</td>
          </tr>
     
        </table>

      </div>
      <div className="calendar"><CloakingCalender /></div>

    </div>
  )
}

export default Profile


