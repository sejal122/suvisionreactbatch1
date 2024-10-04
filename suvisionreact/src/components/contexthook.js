import React, { createContext, useState } from 'react'
import Employeedetails from './employeedetails'

function Contexthook() {
    const UserContext =createContext()
    const [user,setUser]=useState("Jhon walker")
    return (
        <UserContext.Provider value={user}>
            <h1>Hello {user} !</h1>
            <Employeedetails/>
        </UserContext.Provider>
    )
}

export default  Contexthook
