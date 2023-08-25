import { TextField } from "@mui/material"

const CompletedTempleteActions = () => {

    return <div className="template-actions-container">
        <div className="template-actions-header">Completed</div>
        <div className="template-actions-body">
            <div className="detail-item" >
                <div className="detail-name">Origin</div>
                <div className="detail-value">client or captures name</div>
            </div>
            <div className="detail-item" >
                <div className="detail-name">Created Date</div>
                <div className="detail-value">2 jan 2023</div>
            </div>
            <div className="detail-item" >
                <div className="detail-name">Submitted By</div>
                <div className="detail-value">capturer name</div>
            </div>
            <div className="detail-item" >
                <div className="detail-name">Submit Date</div>
                <div className="detail-value">2 jan 2023</div>
            </div>

            <div className="detail-item" >
                <div className="detail-name">Reviewed By</div>
                <div className="detail-value">Reviewer name</div>
            </div>
            <div className="detail-item" >
                <div className="detail-name">Review Date</div>
                <div className="detail-value">2 jan 2023</div>
            </div>

            <div className="actions-instructions-section">
                <span className="actions-instructions">If there are any suspected outdated information please send the template to review with review notes
                </span>


            </div>
        </div>

        <div className="template-actions-footer">
            <TextField
                variant='outlined'
                fullWidth
                placeholder="Review Notes"
                multiline
                minRows={3}
                size='small'
            />
            <div className="actions-footer-buttons-section">
                <button>Send to Review</button>
            </div>
        </div>


    </div>
}

export default CompletedTempleteActions
