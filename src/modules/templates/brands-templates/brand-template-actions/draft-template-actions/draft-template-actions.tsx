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
                </ul><br />
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
                </ul><br />
                <h5>Why Review</h5>
                <span className="actions-instructions">Contact details no longer used</span>

            </div>
        </div>
    }





    const draftType: string = DraftType.Review

    return <div className="template-actions-container">
        <div className="template-actions-header">DRAFT : {draftType} - TODO</div>
        <div className="template-actions-body">
            {draftType === DraftType.FromClient && fromClient()}
            {draftType === DraftType.ClientEdits && clientEdits()}
            {draftType === DraftType.InProgress && inProgress()}
            {draftType === DraftType.Rejected && rejected()}
            {draftType === DraftType.Review && review()}
        </div>
        <div className="template-actions-footer">
            {draftType === DraftType.InProgress && <TextField
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