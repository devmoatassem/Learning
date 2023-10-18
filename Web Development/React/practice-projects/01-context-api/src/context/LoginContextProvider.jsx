import React, { useState } from "react";
import LoginContext from "./LoginContext";


const LoginContextProvider = ({children}) =>{
    const [login,setLogin] = useState(false)
    const a = "Loged-in"
    return(
        <LoginContext.Provider value={{a,login,setLogin}}>
            {children}

        </LoginContext.Provider>
    )
}

export default LoginContextProvider;