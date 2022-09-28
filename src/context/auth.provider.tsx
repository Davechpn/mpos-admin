import React from "react";
import { createContext, useState } from "react";

const AuthContext = React.createContext<any>({});

export const AuthProvider: React.FC<any> = ({ children }) => {
   const [auth, setAuth] = useState()

   return (
      <AuthContext.Provider value={{ auth, setAuth }}>
         {children}
      </AuthContext.Provider>
   )

}

export default AuthContext