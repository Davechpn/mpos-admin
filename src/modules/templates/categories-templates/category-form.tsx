import { TextField } from "@mui/material"
import { useForm } from "react-hook-form"

const CategoryForm = (props:any)=>{
    const { register, handleSubmit, control, formState } = useForm()
    const { errors } = formState

    console.log('selected category', props.selectedPayment)

    const onSave = () => {
        console.log('saving category')
    }

    return <div>
        <form className="form-container" onSubmit={handleSubmit(onSave)}>
            
            <TextField id="name" {...register("description")}
                error={!!errors.name}
                helperText={errors.name?.message as string}
                size="small" variant="standard" />
    
            <TextField id="description" {...register("description")}
                error={!!errors.note}
                multiline
                minRows={3}
                helperText={errors.note?.message as string}
                size="small" label="Name" variant="standard" />
            <br />
            <div>Payment Method Select</div>
            <div>Date datepicker</div>


            <br />



            <button type="submit">Submit</button>
        </form>
    </div>
}
export default CategoryForm