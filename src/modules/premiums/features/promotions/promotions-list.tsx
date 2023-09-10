
import { DataGrid } from "@mui/x-data-grid"
import PageHeader from "../../../../shared/header/header"
import "./promotions-list.css"
import { FunctionComponent } from "react"
import { promotions } from "../../../../fake-db/promotions"
import { Promotion } from "../../../../types/promotion"
import { promotionsColumns } from "../features-column-definitions"

const promos:Promotion[] = promotions
const PromotionsList:FunctionComponent = () => {
    return <DataGrid
    rows={promos}
    columns={promotionsColumns}
    density='compact'
    onRowClick={({ row }) => { }}
 />
    
}

export default PromotionsList