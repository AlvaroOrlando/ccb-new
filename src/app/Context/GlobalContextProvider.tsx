'use client';

import { useContext, useState, createContext } from 'react'
import { redirect } from "next/navigation"



interface ContextProps {
    log: boolean,
    handleLogoff: () => void,
    handleLogin:() => void
}

const GlobalContext = createContext<ContextProps>({
  log: false,
  handleLogin: (): boolean => true,
  handleLogoff: (): boolean => false,
})

export function GlobalContextProvider({ children }:any) {
  
    const [log, setLog] = useState(false)
  
    function handleLogin(){
      setLog(true)
    }
  
    function handleLogoff(){
      setLog(false)
      redirect('/')
    }

    return <GlobalContext.Provider 
      value={{
        log,
        handleLogoff,
        handleLogin
      }}>
        { children }
    </GlobalContext.Provider>
}

export const useGlobalContext = () => useContext(GlobalContext)