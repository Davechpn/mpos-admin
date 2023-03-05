import React from "react";
import { createContext, useState } from "react";
import Cookie from 'universal-cookie'
import { Auth } from "../types/Auth";
const cookies = new Cookie()

const AuthContext = React.createContext<any>({});

export const AuthProvider: React.FC<any> = ({ children }) => {
   const [auth, setAuth] = useState<Auth>(
      {
         user: {
            id:"10",
            avatar: "https://pbs.twimg.com/profile_images/1507692381688238084/QL5wXFX-_400x400.jpg",
            name: "Dave",
            role_id: "1",
            country:"South Africa"
         },
         token: cookies.get("auth_token")
      }
   )

   return (
      <AuthContext.Provider value={{ auth, setAuth }}>
         {children}
      </AuthContext.Provider>
   )

}

export default AuthContext