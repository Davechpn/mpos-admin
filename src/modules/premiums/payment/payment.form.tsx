import { TextField } from "@mui/material"
import { useForm } from "react-hook-form"

const PaymentForm = (props:any) => {
    const { register, handleSubmit, control, formState } = useForm()
    const { errors } = formState

    console.log('selected payment', props.selectedPayment)

    const onSave = () => {
        console.log('saving package')
    }

    return <div>
        <form className="premiums-form-container" onSubmit={handleSubmit(onSave)}>
            <div>Client Select</div>
            <div>Package Select</div>
    
            <TextField id="note" {...register("note")}
                error={!!errors.note}
                multiline
                minRows={3}
                helperText={errors.note?.message as string}
                size="small" label="Note3" variant="standard" />
            <br />
            <div>Payment Method Select</div>
            <div>Date datepicker</div>


            <br />



            <button type="submit">Submit</button>
        </form>
    </div>
}

export default PaymentForm