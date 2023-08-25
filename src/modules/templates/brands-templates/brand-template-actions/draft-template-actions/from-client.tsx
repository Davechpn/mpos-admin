
export const fromClient = () => {
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
            <span className="actions-instructions">Please review this template and click edit to make approproate adjustments before
                sending to your Reviewer</span>
            <h5>Steps</h5>
            <ul>
                <li>1. Research brand information</li>
                <li>2. Correct wrongly input infomation</li>
                <li>3. Add missing infomation</li>
                <li>4. Save as draft if not finished</li>
                <li>5. Send to your Reviewer when finished</li>
            </ul>

        </div>
    </div>
}