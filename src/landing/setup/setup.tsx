import { Button, MenuItem, TextField, Select } from "@mui/material"
import { collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useForm, useController, Controller } from "react-hook-form";
import { useParams } from 'react-router-dom'
import { firestore_db } from "../../firebase";
import './setup.css'

const Setup = () => {
    const { register, handleSubmit, control, watch, formState: { errors } } = useForm();
    const [selectedCountry, setSelectedCountry] = useState<any>({ value: "Zambia", label: "Zambia" })
    const { field } = useController({ name: 'country', control })
    const [userId, setUserId] = useState("")
    let { code } = useParams()

    useEffect(() => {
        const usersRef = collection(firestore_db, `users`)
        const db_query = query(usersRef, where('verificationCode', '==', code))
        getDocs(db_query).then((x) => {
            console.log('User', x.docs[0].id)
            setUserId(x.docs[0].id)
        })

    }, [])

    const save = (data: any) => {
        const contacts = { ...data, country: selectedCountry }

        console.log(contacts);

        const userRef = doc(firestore_db, `users/${userId}`)

        updateDoc(userRef, { contact: contacts, status: 'joined' })

    }

    const countryOptions = [
        { value: "Angola", label: "Angola" },
        { value: "Mozambique", label: "Mozambique" },
        { value: "Zambia", label: "Zambia" },
        { value: "Zimbabwe", label: "Zimbabwe" }
    ]


    console.log(watch("example"));


    return (<div className="setup-page">

        <div className="setup-container">
            <div className=""></div>
            <form onSubmit={handleSubmit(save)}>

                <TextField {...register('cell')} />
                <TextField {...register('address')} label="address" />
                <TextField {...register('city')} label="city" />

                <Select
                    autoWidth
                    name="name"
                    value={selectedCountry}
                    onChange={e => setSelectedCountry(e.target.value)}
                >
                    {countryOptions.map((country) => (
                        <MenuItem key={country.value} value={country.value}>
                            {country.label}
                        </MenuItem>
                    ))}
                </Select>

                <Button variant="contained" type="submit">Contained</Button>
            </form>


            {/* name:string,
    address:string,
    city:string,
    email:string,
    cell:string,
    tell:string,
    country:string, */}

        </div>

    </div>)
}

export default Setup