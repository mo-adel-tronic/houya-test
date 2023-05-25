import React, { useEffect, useState } from 'react'

export const AuthContext = React.createContext();

export default function AuthProvider(props) {
    const [auth, setAuth] = useState({})

    useEffect(()=> {
        const user = localStorage.getItem('userData')
        if(user !== null && user !== '{}') {
            setAuth(JSON.parse(user))
        }
    }, [])
  return (
    <AuthContext.Provider value={{auth, setAuth}}>
        {props.children}
    </AuthContext.Provider>
  )
}
