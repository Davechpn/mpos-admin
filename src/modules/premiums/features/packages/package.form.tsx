import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { useFieldArray, useForm } from "react-hook-form"

export const PackageForm = () => {
    const { register, handleSubmit, control, formState } = useForm()
    const { errors } = formState

    const { fields: pricesFields, append: appendPrices, remove: removePrices } = useFieldArray<any>({
        name: 'prices',
        control
    })


    const onSave = () => {
        console.log('saving package')
    }

    let features = ['Scan']
    return <div>
        <form className="premiums-form-container" onSubmit={handleSubmit(onSave)}>
            <TextField id="name" {...register("name")}
                placeholder="Package Name"
                error={!!errors.name}
                variant="standard"
                helperText={errors.name?.message as string} /> <br />
            <br />
            <TextField id="description" {...register("description")}
                error={!!errors.description}
                multiline
                minRows={3}
                helperText={errors.description?.message as string}
                size="small" label="Description" variant="standard" />
            <br />
            <TextField id="level" {...register("level")}
                error={!!errors.level}
                placeholder="Level"
                variant="standard"
                helperText={errors.level?.message as string} /> <br />


            <FormControl>
                <InputLabel id="country-select-label">Features</InputLabel>
                <Select
                    labelId="country-select-label"
                    id="type-select"
                    value={[features]}
                    variant="standard"
                    multiple
                >
                    <MenuItem value={'Scan'}>Scan</MenuItem>
                    <MenuItem value={'Stock Diary'}>Angola</MenuItem>

                </Select>

            </FormControl>
            <br />

            <div className="prices-items-header">Prices</div>
            <div className="prices-items-container">
                {pricesFields.map((field, index) => {
                    return <div className="price-item" key={field.id}>
                        <div className="price-item-label">
                            <input style={{ width: "120px" }} className="prices-item-input" type="text" {...register(`prices.${index}.amount`)} placeholder="Enter amount.." />
                            <input style={{ width: "120px" }} className="prices-item-input" type="text" {...register(`prices.${index}.duration`)} placeholder="Enter duration.." />
                            <input style={{ width: "120px" }} className="prices-item-input" type="text" {...register(`prices.${index}.extension_time`)} placeholder="Enter extension time.." />
                        </div>
                        <div className="array-item-action">
                            <button className="array-item-remove" onClick={() => removePrices(index)}>x</button>
                        </div>
                    </div>
                })}
                <button type="button" className="array-item-add" onClick={() => appendPrices("")}>Add New</button>
            </div>



            <span>Color color picker</span>
            {/* Colors colorpicker */}


            <button type="submit">Submit</button>
        </form>
    </div>
}