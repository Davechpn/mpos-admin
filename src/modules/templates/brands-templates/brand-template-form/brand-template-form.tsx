import { Button, Icon, TextField } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useForm, useFieldArray } from 'react-hook-form';
import Cropper from 'react-easy-crop'
import "./brand-template-form.css"
import { useCallback, useState } from "react";
import { DevTool } from "@hookform/devtools";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { Add } from "@mui/icons-material";



const schema = yup.object({
    name: yup.string().required('Brand name is required'),
    description: yup.string().required('Description is required'),
    category: yup.string().required('Category is required'),
    manufacturer: yup.string().required("Manufacturer is required"),
    street_address: yup.string().required('Street address is required'),
    city: yup.string().required("Manufacturer city is required"),
    country: yup.string().required("Manufacturer country is required"),
    website: yup.string().url('Invalid url format'),
    email: yup.string(),
    sizes: yup.array(),
    units: yup.array(),
    varieties: yup.array(),
    addon_categories: yup.array(),
    tel_numbers: yup.array()
})

const BrandTemplateForm = (props:any) => {
    console.log(props);

    const { register, handleSubmit, control, formState } = useForm({
        defaultValues: {
            sizes: ['']
        }, resolver: yupResolver(schema)
    });
    const { errors } = formState

    const { fields: sizesFields, append: appendSize, remove: removeSize } = useFieldArray<any>({
        name: 'sizes',
        control
    })

    const { fields: unitsFields, append: appendUnit, remove: removeUnit } = useFieldArray<any>({
        name: 'units',
        control
    })

    const { fields: varietiesFields, append: appendVariety, remove: removeVariety } = useFieldArray<any>({
        name: 'varieties',
        control
    })

    const { fields: addonCategoriesFields, append: appendAddonCategory, remove: removeAddonCategory } = useFieldArray<any>({
        name: 'addon_categories',
        control
    })

    const { fields: telNumbersFields, append: appendTelNumber, remove: removeTelNumber } = useFieldArray<any>({
        name: 'tel_numbers',
        control
    })


    const navigate = useNavigate()
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)


    const onCropComplete = useCallback((croppedArea: any, croppedAreaPixels: any) => {
        console.log(croppedArea, croppedAreaPixels)
    }, [])

    const onCancel = () => {
        console.log('cancelling')
        navigate(-1)
    }

    const onReset = () => {
        console.log('reseting')
    }

    const onSave = (data: any) => {

        console.log('saving', data)

    }

    return (
        <div>
            <form className="newform-container" noValidate onSubmit={handleSubmit(onSave)}>
                <div className="newform-pane" >
                    <div className=" top-form-section">
                        <div className="upload-section" >
                            {/* <Cropper
                    
                        image={"https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000"}
                        crop={crop}
                        zoom={zoom}
                        aspect={4 / 4}
                        onCropChange={setCrop}
                        onCropComplete={onCropComplete}
                        onZoomChange={setZoom}
                    /> */}
                        </div>
                        <div className="side-form-section">
                            <TextField id="name" {...register("name")}
                                error={!!errors.name}
                                helperText={errors.name?.message as string}
                                size="small" label="Name" variant="standard" />
                            <TextField id="description" {...register("description")}
                                error={!!errors.description}
                                helperText={errors.description?.message as string}
                                size="small" label="Description" variant="standard" />

                            <TextField id="category" {...register("category")}
                                error={!!errors.category}
                                helperText={errors.category?.message as string}
                                size="small" label="Category" variant="standard" />
                            <TextField id="manufacturer"  {...register("manufacturer")}
                                error={!!errors.manufacturer}
                                helperText={errors.manufacturer?.message as string}
                                size="small" label="Manufacturer" variant="standard" />
                        </div>
                    </div>

                    <div className="form-section">


                        <div className="double-field-item">
                            <TextField id="standard-basic"  {...register("street_address")}
                                error={!!errors.street_address}
                                helperText={errors.street_address?.message as string}
                                size="small" label="Street Address" variant="standard" />
                            <TextField id="standard-basic"  {...register("city")}
                                error={!!errors.city}
                                helperText={errors.city?.message as string}
                                size="small" label="City" variant="standard" />
                        </div>

                        <div className="double-field-item">
                            <TextField id="standard-basic" {...register("country")}
                                error={!!errors.country}
                                helperText={errors.country?.message as string}
                                size="small" label="Country" variant="standard" />



                            <TextField id="standard-basic"  {...register("email")}
                                error={!!errors.email}
                                helperText={errors.email?.message as string}
                                size="small" label="Email" variant="standard" />


                        </div>
                        <div className="double-field-item">
                            <TextField id="standard-basic" {...register("website")}
                                error={!!errors.website}
                                helperText={errors.website?.message as string}
                                size="small" label="Website" variant="standard" />
                        </div>
                    </div>
                </div>
                <div className="newform-pane fields-pane">

                    <div className="form-section">


                        <div className="array-items-header">
                            Sizes
                            <div className="array-item-add" onClick={() => appendSize("")}>
                                <Add />
                            </div>
                        </div>
                        <div className="array-items-container">
                            {sizesFields.map((field, index) => {
                                return <div className="array-item" key={field.id}>
                                    <div className="array-item-label">
                                        <input style={{ width: "100px" }} className="array-item-input" type="text" {...register(`sizes.${index}`)} placeholder="Enter size.." />
                                    </div>
                                    <div className="array-item-action">
                                        <button className="array-item-remove" onClick={() => removeSize(index)}>x</button>
                                    </div>
                                </div>
                            })}
                        </div>


                        <div className="array-items-header">Units</div>
                        <div className="array-items-container">
                            {unitsFields.map((field, index) => {
                                return <div className="array-item" key={field.id}>
                                    <div className="array-item-label">
                                        <input style={{ width: "120px" }} className="array-item-input" type="text" {...register(`units.${index}`)} placeholder="Enter unit.." />
                                    </div>
                                    <div className="array-item-action">
                                        <button className="array-item-remove" onClick={() => removeUnit(index)}>x</button>
                                    </div>
                                </div>
                            })}
                            <button type="button" className="array-item-add" onClick={() => appendUnit("")}>Add New</button>
                        </div>


                        <div className="array-items-header">Varieties</div>
                        <div className="array-items-container">
                            {varietiesFields.map((field, index) => {
                                return <div className="array-item" key={field.id}>
                                    <div className="array-item-label">
                                        <input style={{ width: "120px" }} className="array-item-input" type="text" {...register(`varieties.${index}`)} placeholder="Enter variety.." />
                                    </div>
                                    <div className="array-item-action">
                                        <button className="array-item-remove" onClick={() => removeVariety(index)}>x</button>
                                    </div>
                                </div>
                            })}
                            <button type="button" className="array-item-add" onClick={() => appendVariety("")}>Add New</button>
                        </div>



                        <div className="array-items-header">AddOn Categories</div>
                        <div className="array-items-container">
                            {addonCategoriesFields.map((field, index) => {
                                return <div className="array-item" key={field.id}>
                                    <div className="array-item-label">
                                        <input style={{ width: "120px" }} className="array-item-input" type="text" {...register(`addon_categories.${index}`)} placeholder="Enter category.." />
                                    </div>
                                    <div className="array-item-action">
                                        <button className="array-item-remove" onClick={() => removeAddonCategory(index)}>x</button>
                                    </div>
                                </div>
                            })}
                            <button type="button" className="array-item-add" onClick={() => appendAddonCategory("")}>Add New</button>
                        </div>



                        <div className="tel-items-header">Tel Numbers</div>
                        <div className="tel-items-container">
                            {telNumbersFields.map((field, index) => {
                                return <div className="tel-item" key={field.id}>
                                    <div className="tel-item-label">
                                        <input style={{ width: "120px" }} className="tel-item-input" type="text" {...register(`tel_numbers.${index}.name`)} placeholder="Enter name.." />
                                        <input style={{ width: "120px" }} className="tel-item-input" type="text" {...register(`tel_numbers.${index}.number`)} placeholder="Enter number.." />
                                    </div>
                                    <div className="array-item-action">
                                        <button className="array-item-remove" onClick={() => removeTelNumber(index)}>x</button>
                                    </div>
                                </div>
                            })}
                            <button type="button" className="array-item-add" onClick={() => appendTelNumber("")}>Add New</button>
                        </div>

                    </div>
                    <div className="form-actions">
                        <button type="submit">Submit</button>,   save as draft, reset
                    </div>

                </div>
            </form>
            <DevTool control={control} />
        </div>


    )
}

export default BrandTemplateForm


