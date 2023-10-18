import { useState } from 'react'

import './App.css'
import LoginContextProvider from './context/LoginContextProvider'
import Body from './components/Body'





function App() {
  return (
    <LoginContextProvider>
      <Body/>
    </LoginContextProvider>
  )
}

export default App
