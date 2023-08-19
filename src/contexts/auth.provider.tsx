import { doc, getDoc, onSnapshot } from "firebase/firestore";
import React, { useEffect } from "react";
import { createContext, useState } from "react";
import Cookie from 'universal-cookie'
import { firestore_db } from "../firebase";
import { Auth } from "../types/Auth";
const cookies = new Cookie()

const AuthContext = React.createContext<any>({});

export const AuthProvider: React.FC<any> = ({ children }) => {
   const [auth, setAuth] = useState<Auth>()
   const [permissions, setPermissions] = useState<any>()
   const [role, setRole] = useState<string>("")


   useEffect(() => {
      console.log("gggg",auth)
      //check the user role_id and go fetch permissions
      if (auth && auth.user?.role_id) {
         const roleRef = doc(firestore_db, `roles/${auth.user.role_id}`)
         onSnapshot(roleRef,(snapshot)=>{
            let role_data = snapshot.data()
   
            setRole(role_data?.name)

            let access_modules  = role_data?.permissions;

            for (const key of Object.keys(access_modules)) {
               // console.log(key, obj[key]);
               access_modules[key] = getPermissions(access_modules[key])
            }

            console.warn('access modeles',access_modules)
            setPermissions(access_modules)

        })

      }else{
         console.log("kkkkk",auth)
      }

   }, [auth])

   const getPermissions = (access: any) => {

      let perms = {
         isViewer: access === "viewer" || access === "editor" || access === "admin",
         isEditor: access === "editor" || access === "admin",
         isAdmin:  access === "admin"
      }
      return perms
   }

   return (
      <AuthContext.Provider value={{ auth, setAuth, permissions }}>
         {children}
      </AuthContext.Provider>
   )

}

export default AuthContext