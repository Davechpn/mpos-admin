import { useContext, useState } from "react"
import AuthContext from "../../contexts/auth.provider"
import axios from '../../api/axios'
import { Button, TextField } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { auth, firestore_db, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth"
import Cookie from 'universal-cookie'

import './login.css'
import { doc, getDoc } from "firebase/firestore"

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
            


            navigate("/", { replace: true });
        } catch (error) {
            console.log(error)
        }
    }

    const continueNext = (email: any, avatar: any, token: any) => {
        //get the db user
        const userRef = doc(firestore_db, `users/${email}`)
        getDoc(userRef).then((db_user) => {

            let dbUser: any = { ...db_user.data(), id: db_user.id, avatar }
            console.log('ther', db_user.data())
       

            if (db_user.data()) {
                if (dbUser.suspendend_date) {
                    navigate("/suspended", { replace: true });
                }
                if (!dbUser.contact) {                   
                    navigate(`/setup/${dbUser.verification_code}`, { replace: true });
                }
                if (dbUser.contact && !dbUser.suspendend_date) {
                    setAuth({
                        user: dbUser,
                        token: token
                    })
                    navigate("/", { replace: true });
                }

            } else {
                navigate("/unauthorized", { replace: true });
            }

        })

    }

    const signInWithGoogle = async () => {
        try {
            const results = await signInWithPopup(auth, provider)
            console.log('gmail user', results)
            //set cookies here
            // setAuth(results.user)
            let email = results.user.email
            let avatar = results.user.photoURL
            let token = results.user.refreshToken

            cookies.set("auth_token", results.user.refreshToken);


            continueNext(email, avatar, token)


        } catch (err) {
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