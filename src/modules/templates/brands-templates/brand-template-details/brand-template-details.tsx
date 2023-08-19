import { BrandTemplate } from "../../../../types/brand"
import CompletedTempleteActions from "../brand-template-actions/completed-template-actions/completed-template-actions"
import DraftTemplateActions from "../brand-template-actions/draft-template-actions/draft-template-actions"
import EditionTemplateActions from "../brand-template-actions/edition-template-actions/editon-template-actions"
import FromClientTemplateActions from "../brand-template-actions/from-client-template-actions/from-client-template-actions"
import UnModeratedTemplateActions from "../brand-template-actions/unmoderated-template-actions/unmoderated-template-actions"
import "./brand-template-details.css"

const BrandTemplateDetails = (props: any) => {
    const brand: BrandTemplate = props?.brand
    const actions: number = props?.actions

    return (
        <div className="details-container">

            <div className="details-pane">

                <div className="detail-item">
                    <div className="image-container"><img src={brand.image.url} className="brandtemplate-image" />
                    </div>
                    <div>
                        <div className="detail-item" >
                            <div className="detail-name" style={{ width: "66px" }}>Name</div>
                            <div className="detail-value">{brand.name}</div>
                        </div>
                        <div className="detail-item" >
                            <div className="detail-name" style={{ width: "66px" }}>Category</div>
                            <div className="detail-value">{brand.category}</div>
                        </div>
                        <div className="detail-item">
                            <div className="detail-name" style={{ width: "66px" }}>Sizes</div>
                            <div className="detail-value values-group">
                                {
                                    brand.sizes.map((size) => {
                                        return <div key={size} className="values-group-item">{ }</div>
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>

                <div className="detail-item">
                    <div className="detail-name">Manufacturer</div>
                    <div className="detail-value">{brand.manufacturer}</div>
                </div>
                <div className="detail-item">
                    <div className="detail-name">Address</div>
                    <div className="detail-value">{brand.street_address}, {brand.city}</div>
                </div>
                <div className="detail-item">
                    <div className="detail-name">Country</div>
                    <div className="detail-value">{brand.country}</div>
                </div>
                <div className="detail-item">
                    <div className="detail-name">Website</div>
                    <div className="detail-value">{brand.website}</div>
                </div>
                <div className="detail-item">
                    <div className="detail-name">Email</div>
                    <div className="detail-value">{brand.email}</div>
                </div>
                <div className="detail-item">
                    <div className="detail-name">Tel</div>
                    <div className="detail-value values-group">
                        {
                            brand.tel.map((tel) => {
                                return <div key={tel.number} className="values-group-item">{tel.number}</div>
                            })
                        }

                    </div>
                </div>

            </div>

            <div className="details-pane actions-pane">
                {[
                    DraftTemplateActions(),
                    UnModeratedTemplateActions(),
                    CompletedTempleteActions(),
                    FromClientTemplateActions(),
                    EditionTemplateActions()
                ][actions]}
            </div>


        </div>
    )
}

export default BrandTemplateDetails