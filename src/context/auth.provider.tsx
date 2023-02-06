import React from "react";
import { createContext, useState } from "react";
import Cookie from 'universal-cookie'
const cookies = new Cookie()

const AuthContext = React.createContext<any>({});

export const AuthProvider: React.FC<any> = ({ children }) => {
   const [auth, setAuth] = useState(cookies.get("auth_token"))

   return (
      <AuthContext.Provider value={{ auth, setAuth }}>
         {children}
      </AuthContext.Provider>
   )

}

export default AuthContext