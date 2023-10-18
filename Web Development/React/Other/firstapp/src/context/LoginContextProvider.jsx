import React from "react";
import LoginContext from "./LoginContext";
import { useContext } from "react";

import { createContext} from 'react';

// const LoginContext = createContext(null)

// export default LoginContext;

const LoginContextProvider = ({children}) =>{
    // const [login,setLogin] = useContext(true)
    const a = 10
    return(
        <LoginContext.Provider value={a}>
            {children}

        </LoginContext.Provider>
    )
}

export default LoginContextProvider;