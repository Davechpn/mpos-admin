import { TextField } from "@mui/material"

const InReviewTemplateActions = () => {
    return <div className="template-actions-container">
        <div className="template-actions-header">In Review - TODO</div>
        <div className="template-actions-body">

            <div className="detail-item" >
                <div className="detail-name">Submitted By</div>
                <div className="detail-value">capturer name</div>
            </div>
            <div className="detail-item" >
                <div className="detail-name">Origin</div>
                <div className="detail-value">client or captures name</div>
            </div>
            <div className="detail-item" >
                <div className="detail-name">Date</div>
                <div className="detail-value">2 jan 2023</div>
            </div>

            <div className="actions-instructions-section">
                <span className="actions-instructions">Please review this template and click approve or reject
                </span>
                <h5>Steps</h5>
                <ul>
                    <li>1. Visit brand wesite if avalable</li>
                    <li>2. Check for correctness of information and spellings</li>
                    <li>3. check if entered information makes sense</li>
                    <li>4. Approve if everthing is okay</li>
                    <li>5. Reject and add rejection notes if adjustments have to be made</li>
                </ul>

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
                <button>Reject</button> &nbsp;&nbsp;
                <button>Approve</button>
            </div>
        </div>


    </div>
}

export default InReviewTemplateActions