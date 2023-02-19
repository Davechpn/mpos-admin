import { useContext, useState } from "react"
import AuthContext from "../context/auth.provider"
import axios from '../api/axios'
import { Button, TextField } from "@mui/material"
import { useNavigate } from "react-router-dom"
import {auth, provider} from "../firebase-setup/firebase";
import { signInWithPopup } from "firebase/auth"
import Cookie from 'universal-cookie'

import './login.css'

const LOGIN_URL = '/token'
const cookies = new Cookie()


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { setAuth } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        console.log(email, password)
        try {
            const response = await axios.post(LOGIN_URL, JSON.stringify({ email, password }),
                {
                    headers: { 'content-Type': 'application/json' }
                })
            // setAuth(response.data)
         

            navigate("/", { replace: true });
        } catch (error) {
                console.log(error)
        }
    }

    const signInWithGoogle = async() =>{
        try{
            const results = await signInWithPopup(auth,provider)
            console.log(results)
            //set cookies here
            cookies.set("auth_token",results.user.refreshToken)
            // setAuth(results.user)
            setAuth({
                user: {
                   id:"10",
                   avatar: "https://pbs.twimg.com/profile_images/1507692381688238084/QL5wXFX-_400x400.jpg",
                   name: "Dave",
                   role_id: "1",
                   country:"South Africa"
                },
                token: cookies.get("auth_token")
             })
            navigate("/", { replace: true });

        }catch(err){
            console.error(err)
        }
   
    }

    return (<div className="login-container">
        <div >
            <h1>Login</h1><br />
            <form onSubmit={handleSubmit} className="login-card">
                <TextField value={email} onChange={(e: any) => { setEmail(e.target.value) }} /><br />
                <TextField type="password" value={password} onChange={(e: any) => { setPassword(e.target.value) }} />

                <Button type="submit" >Login </Button>
                <button onClick={signInWithGoogle} >Signin with Google</button>
            </form>
        </div>

        {/* <button onClick={() => { setAuth({ name: 'David', token: '1234' }) }}>login </button> */}
    </div>
    )
}

export default Login