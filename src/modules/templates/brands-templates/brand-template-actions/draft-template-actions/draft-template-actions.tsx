import { TextField } from "@mui/material"
import { DraftType } from "../../../../../types/brand"
import { fromClient } from "./from-client"
import { clientEdits } from "./client-edits"
import { inProgress } from "./in-progress"

const DraftTemplateActions = () => {


    const rejected = () => {
        return <div>
            <div className="actions-instructions-section">
                <span className="actions-instructions">This template has been rejected by your Reviewer please fix the problems and resubmit</span>
                <h5>Steps</h5>
                <ul>
                    <li>1. Research brand information</li>
                    <li>2. Click edit and continue editing</li>
                    <li>3. Resubmit when finished</li>
                    <li>4. If not finished save as draft</li>
                </ul><br/>
                <h5>Why rejected</h5>
                <span className="actions-instructions">The picture should have a transparent background</span>

            </div>
        </div>
    }

    const review = () => {
        return <div>
            <div className="actions-instructions-section">
                <span className="actions-instructions">This template has been completed however some information might be outdated please update information and resubmit</span>
                <h5>Steps</h5>
                <ul>
                    <li>1. Research brand information</li>
                    <li>2. Click edit and continue editing</li>
                    <li>3. Resubmit when finished</li>
                    <li>4. If not finished save as draft</li>
                </ul><br/>
                <h5>Why Review</h5>
                <span className="actions-instructions">Contact details no longer used</span>

            </div>
        </div>
    }





    const draft_type: string = DraftType.Review

    return <div className="template-actions-container">
        <div className="template-actions-header">DRAFT : {draft_type} - TODO</div>
        <div className="template-actions-body">
            {draft_type === DraftType.FromClient && fromClient()}
            {draft_type === DraftType.ClientEdits && clientEdits()}
            {draft_type === DraftType.InProgress && inProgress()}
            {draft_type === DraftType.Rejected && rejected()}
            {draft_type === DraftType.Review && review()}
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
                <button>Save Notes</button> &nbsp;&nbsp;
                <button>Continue to Edit</button>
            </div>
        </div>


    </div>
}

export default DraftTemplateActions