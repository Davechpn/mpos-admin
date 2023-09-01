import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { useForm } from "react-hook-form"
import { features } from "../../../../fake-db/features"

const PromotionsForm = () => {
    const { register, handleSubmit, formState } = useForm()
    const { errors } = formState

    const onSave = () => {

    }
    let country = 'Angola';
    let industry = 'retail';
    return (<div>
        <form className="premiums-form-container" onSubmit={handleSubmit(onSave)}>
            <TextField id="name" {...register("name")}
            placeholder="Promotion name"
                error={!!errors.name}
                variant="standard"
                helperText={errors.name?.message as string} /> <br />



            <TextField id="description" {...register("description")}
                error={!!errors.description}
                multiline
                minRows={3}
                helperText={errors.description?.message as string}
                size="small" label="Description" variant="standard" />
    <br/>
      <span>Start date datepicker</span>
     {/* Start date datepicker */}
     <br/>
      <span>End date datepicker</span>
            {/* End date datepicker */}

         

            <FormControl>
                <InputLabel id="country-select-label">Features</InputLabel>
                <Select
                    labelId="country-select-label"
                    id="type-select"
                    value={features}
                    variant="standard"
                    multiple
                >
                    <MenuItem value={'Scan'}>Scan</MenuItem>
                    <MenuItem value={'Stock Diary'}>Angola</MenuItem>

                </Select>

            </FormControl>
            <br />
            <FormControl>
                <InputLabel id="industry-select-label">Industries</InputLabel>
                <Select
                    labelId="industry-select-label"
                    id="type-select"
                    value={[industry]}
                    variant="standard"
                    multiple
                >
                    <MenuItem value={'retail'}>Retail</MenuItem>
                    <MenuItem value={'services'}>Services</MenuItem>
                    <MenuItem value={'fast food'}>Fast Food</MenuItem>


                </Select>

            </FormControl>

            <br />

            <FormControl>
                <InputLabel id="country-select-label">Countries</InputLabel>
                <Select
                    labelId="country-select-label"
                    id="type-select"
                    value={[country]}
                    variant="standard"
                    multiple
                >
                    <MenuItem value={'Angola'}>Angola</MenuItem>
                    <MenuItem value={'Zambia'}>Zambia</MenuItem>

                </Select>

            </FormControl>
            <br />

            <button type="submit">Submit</button>
        </form>

    </div>)
}

export default PromotionsForm

