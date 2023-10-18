import React, { useContext } from "react"
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import LoginContext from "../context/LoginContext"

function Body(){
    const {a,login,setLogin} = useContext(LoginContext)
    
    return(
        
        <>
        <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{login? a : "Loged-out" }</h1>
      <div className="card">
        <button onClick={() => setLogin((login) => (login=!login))}>
          {login ?"Logout" : "Login"} 
        </button>
        <p>
          Press the button to change Login State
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
        </>
    )
}

export default Body;