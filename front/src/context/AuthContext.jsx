import axios from "axios";
import React, {createContext, useEffect, useState} from "react";

const Context = createContext();

function AuthProvider({children}) {

  const [authenticated, setAuthenticate] = useState(false)
  const [admin, setAdmin] = useState(false)
  const [loading, setLoading] = useState(true)


  const logout = () => {
    localStorage.removeItem('auth_token')
    setAuthenticate(false)
    setAdmin(false)
  }
  const token = localStorage.getItem('auth_token')

  const handleAuthenticated = async() => {
    const response = await axios.post('http://localhost:3008/authenticate', {
      token
    })

    if(response.data.authenticate === true){
      setAuthenticate(true)
    }
    if(response.data.admin){
      setAdmin(true)
    }
    setLoading(false)
    console.log(response.data)
  }

  useEffect(() =>{
    handleAuthenticated()

  }, [authenticated, loading, admin])



  if(loading) {
    return <h1>Carregando</h1>
  }

  return(
    <Context.Provider value={{authenticated, handleAuthenticated, logout, admin} }>
      {children}
    </Context.Provider>
  )
}

export {Context, AuthProvider}