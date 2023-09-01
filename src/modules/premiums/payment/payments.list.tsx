import { DataGrid, GridColDef } from "@mui/x-data-grid"
import PageHeader from "../../../shared/header/header"
import './payments.list.css'
import { Payments } from "../../../fake-db/payments"
import PaymentForm from "./payment.form"
import Actions from "../../../shared/actions/actions"
import { PaymentsRange } from "./payments.range"
import { useState } from "react"


const payments = Payments
const enum SidePaneView {
    New = 'new',
    Edit = 'edit'
 }
 
const PaymentsList = () => {
    const [selectedPayment, setSelectedPayment] = useState();
    const [sidePaneView, setSidePaneView] = useState(SidePaneView.New)

    const onAdd = () =>{
        console.log('adding payment')
        setSidePaneView(SidePaneView.New)
    }
    const onEdit = () =>{
        console.log('editing payment')
        setSidePaneView(SidePaneView.Edit)

    }
     return (
        <div className="page-content payments-list-page">
        <div className="header">
          <PageHeader title="Payments"/>
        </div>
  
           
    
        <div className="actions">
            <Actions add={onAdd} edit={onEdit}/>
        </div>
        <div className="list">
     <div style={{marginTop:"-28px"}}> <PaymentsRange /></div>  
           <DataGrid
                  rows={payments}
                  columns={paymentsColumns}
                  density='compact'
                  onRowClick={({ row }) => { setSelectedPayment(row) }}
               />

        </div>
        <div className="preview">
            {sidePaneView === SidePaneView.Edit?
            <PaymentForm selectedPayment={selectedPayment}/>:
            <PaymentForm />
            }
         
        </div>
  
      </div>
     )
}


export default PaymentsList

const paymentsColumns: GridColDef[] = [{
    field: "client",
    headerName: 'Client',
    width: 150
}, {
    field: "package",
    headerName: 'Package',
    width: 150
},
{
    field: "amount",
    headerName: 'Amount',
    width: 74
},
{
    field: "payment_method",
    headerName: 'Payment Method',
    width: 150
},
{
    field: "cashier",
    headerName: 'Cashier',
    width: 150
},
{
    field: "date",
    headerName: 'Date',
    width: 150
}

]