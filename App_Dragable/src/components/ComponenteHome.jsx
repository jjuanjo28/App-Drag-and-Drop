import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ComponenteHome({logged}) {
  const navigate = useNavigate()

  return (
    <div>
    
    {logged? ( <button onClick={()=>navigate("/componenteUno")}>ComponenteUno</button>):null}
    {logged? (  <button onClick={()=>navigate("/componenteDos")}>ComponenteDos</button>):null}
    {logged? (  <button onClick={()=>navigate("/componenteTres")}>ComponenteTres</button>):null}
     
    </div>
  )
}
