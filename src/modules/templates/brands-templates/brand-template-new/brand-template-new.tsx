import { Button, TextField } from "@mui/material"
import { useNavigate } from "react-router-dom"
import Actions from "../../../../shared/actions/actions"
import PageHeader from "../../../../shared/header/header"
import { useForm } from 'react-hook-form';
import { gql, useMutation } from '@apollo/client';
import Cropper from 'react-easy-crop'
import "./brand-template-new.css"
import { useCallback, useState } from "react";



const ADD_BRAND = gql`
  mutation ($brand : BrandInput!) {
    createBrand(brand: $brand) {
      id
      name
    }
  }
`;


const BrandTemplateNew = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)



    const onCropComplete = useCallback((croppedArea: any, croppedAreaPixels: any) => {
        console.log(croppedArea, croppedAreaPixels)
    }, [])

    const [createBrand, { data, loading, error }] = useMutation(ADD_BRAND, {
        refetchQueries: [
            'GetBrands'
        ],
    });

    if (loading) return <div>Submitting...</div>;
    if (error) return <div>Submission error! ${error.message}</div>;

  


    const onCancel = () => {
        console.log('cancelling')
        navigate(-1)
    }

    const onReset = () => {
        console.log('reseting')
    }

    const onSave = (data: any) => {
        data.sizes = ["100ml"]
        console.log('saving', data)

        createBrand({
            variables: {
                brand: data
            }
        })
    }

    return (
        <div className="page-content brand-new-page">
            <div className="header">
                <PageHeader title="New Brand" />
            </div>

            <div className=" upload">
                     <div className="text-lg">Instructions</div>
                <ul>
                    <li>Image should have a white background</li>
                </ul>
            </div>
            <div className="actions">
                <Actions cancel={onCancel} reset={onReset} save={onSave} />
            </div>


            <div className="list form-container">
                <form className="form" onSubmit={handleSubmit(onSave)}>

                    <TextField label="Brand name" variant="outlined"
                        {...register("name")}
                        error={true}
                        helperText="" />
  <> {errors.name && errors.message}</>
                    <br/>

                    <TextField label="Image" variant="outlined"
                        {...register("image")}
                    /><br/>

                    <TextField label="producer" variant="outlined"
                        {...register("producer")}
                    /><br/>

                    <TextField label="street_address" variant="outlined"
                        {...register("street_address")}
                    /><br/>

                    <TextField label="city" variant="outlined"
                        {...register("city")}
                    /><br/>

                    <TextField label="website" variant="outlined"
                        {...register("website")}
                    /><br/>

                    {/* <TextField label="sizes" variant="outlined" />
                    <TextField label="varieties" variant="outlined" />
                    <TextField label="contacts" variant="outlined" /> */}

                    <Button type="submit">Submit</Button>
                </form>
            </div>
            <div className="instructions" style={{position:"relative",marginBottom:"60px"}}>
           
                <Cropper
                    image={"https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000"}
                    crop={crop}
                    zoom={zoom}
                    aspect={4 / 4}
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                />
            </div>


        </div>
    )
}

export default BrandTemplateNew


