import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Checklogin() {
    let login = localStorage.getItem("login")
    let navigate = useNavigate()
    
    React.useEffect(()=>{login === "true" ? navigate("/Home") : navigate("/Home")})
    
}
