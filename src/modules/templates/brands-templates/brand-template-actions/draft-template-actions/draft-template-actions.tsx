import { TextField } from "@mui/material"
import { DraftType } from "../../../../../types/brand"
import { fromClient } from "./from-client"

const DraftTemplateActions = () => {



    const clientEdits = () => {
        return <div>
            <div className="detail-item" >
                <div className="detail-name">Client</div>
                <div className="detail-value">client name</div>
            </div>
            <div className="detail-item" >
                <div className="detail-name">Date</div>
                <div className="detail-value">2 jan 2023</div>
            </div>

            <div className="actions-instructions-section">
                <span className="actions-instructions">Please review below template, take good changes that should be applied to all
                 clients and discard changes that should be send to all clients </span>
                <h5>Steps</h5>
                <ul>
                    <li>1. Research brand information</li>
                    <li>2. Take sharable good changes</li>
                    <li>3. Discard changes that shouldnt apply to all clients</li>
                </ul>
            <div className="detail-item" >
                <div className="detail-name">Sizes</div>
                <div className="detail-value">added</div>
                <div className="detail-value">medium</div>
                <div className="detail-value">take, discard</div>
            </div>
       

            </div>

        </div>
    }

    const inProgress = () => {
        return <div>
            Click Edit to continue with this template
        </div>
    }


    const draft_type: string = DraftType.ClientEdits

    return <div className="template-actions-container">
        <div className="template-actions-header">DRAFT : {draft_type} - TODO</div>
        <div className="template-actions-body">
            {draft_type === DraftType.FromClient && fromClient()}
            {draft_type === DraftType.ClientEdits && clientEdits()}
            {draft_type === DraftType.InProgress && inProgress()}
            {draft_type === DraftType.Rejected && inProgress()}
            {draft_type === DraftType.Review && inProgress()}
        </div>
        <div className="template-actions-footer">
           {draft_type === DraftType.InProgress && <TextField
                variant='outlined'
                fullWidth
                placeholder="Draft Notes"
                multiline
                minRows={3}
                size='small'
            />}
            <div className="actions-footer-buttons-section">
                <button>Cancel</button> &nbsp;&nbsp;
                <button>Save Notes</button>
            </div>
        </div>


    </div>
}

export default DraftTemplateActions