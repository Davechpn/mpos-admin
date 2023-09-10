import { BrandTemplate } from "../../../../types/brand"
import CompletedTempleteActions from "./completed-template-actions/completed-template-actions"
import DraftTemplateActions from "./draft-template-actions/draft-template-actions"

import "./brand-template-actions.css"
import InReviewTemplateActions from "./inreview-template-actions/inreview-template-actions"

const BrandTemplateActions = (props: any) => {
    const brandTemplate: BrandTemplate = props?.template
    const actionsIndex: number = props?.actionsIndex

    return (
        <div className="details-container">

            <div className="details-pane" style={{ flexGrow: 1 }}>

                <div className="detail-item" >
                    <div className="image-container"><img src={brandTemplate.image.url} className="brandtemplate-image" />
                    </div>
                    <div>
                        <div className="detail-item" >
                            <div className="detail-name" style={{ width: "66px" }}>Name</div>
                            <div className="detail-value">{brandTemplate.name}</div>
                        </div>

                        <div className="detail-item" >
                            <div className="detail-name" style={{ width: "66px" }}>Category</div>
                            <div className="detail-value">{brandTemplate.category}</div>
                        </div>
                        <div className="detail-item">
                            <div className="detail-name" style={{ width: "66px" }}>Sizes</div>
                            <div className="detail-value values-group">
                                {
                                    brandTemplate.sizes.map((size) => {
                                        return <div key={size} className="values-group-item">{size}</div>
                                    })
                                }

                            </div>
                        </div>
                        <div className="detail-item">
                            <div className="detail-name" style={{ width: "66px" }}>Units</div>
                            <div className="detail-value values-group">
                                {
                                    brandTemplate.units.map((unit) => {
                                        return <div key={unit} className="values-group-item">{unit}</div>
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ overflowY: 'scroll' }}>

                    <div className="detail-item">
                        <div className="detail-name">Description</div>
                        <div className="detail-value">{brandTemplate.description}</div>
                    </div>
                    <div className="detail-item">
                        <div className="detail-name">Varieties</div>
                        <div className="detail-value values-group">
                            {
                                brandTemplate.varieties.map((variety) => {
                                    return <div key={variety} className="values-group-item">{variety}</div>
                                })
                            }

                        </div>
                    </div>
                    <div className="detail-item">
                        <div className="detail-name">Manufacturer</div>
                        <div className="detail-value">{brandTemplate.manufacturer}</div>
                    </div>
                    <div className="detail-item">
                        <div className="detail-name">Address</div>
                        <div className="detail-value">{brandTemplate.streetAddress}, {brandTemplate.city}</div>
                    </div>
                    <div className="detail-item">
                        <div className="detail-name">Country</div>
                        <div className="detail-value">{brandTemplate.country}</div>
                    </div>
                    <div className="detail-item">
                        <div className="detail-name">Website</div>
                        <div className="detail-value">{brandTemplate.website}</div>
                    </div>
                    <div className="detail-item">
                        <div className="detail-name">Email</div>
                        <div className="detail-value">{brandTemplate.email}</div>
                    </div>
                    <div className="detail-item">
                        <div className="detail-name">Tel</div>
                        <div className="detail-value values-group">
                            {
                                brandTemplate.telNumbers.map((tel) => {
                                    return <div key={tel.number} className="values-group-item">{tel.number}</div>
                                })
                            }

                        </div>
                    </div>
                    <div className="detail-item">
                        <div className="detail-name">AddOn Categories</div>
                        <div className="detail-value values-group">
                            {
                                brandTemplate.addonCategories.map((addon_category) => {
                                    return <div key={addon_category} className="values-group-item">{addon_category}</div>
                                })
                            }

                        </div>
                    </div>

                </div>
            </div>

            <div className="details-pane actions-pane">
                {[
                    DraftTemplateActions(),
                    InReviewTemplateActions(),
                    CompletedTempleteActions()
                ][actionsIndex]}
            </div>


        </div>
    )
}

export default BrandTemplateActions