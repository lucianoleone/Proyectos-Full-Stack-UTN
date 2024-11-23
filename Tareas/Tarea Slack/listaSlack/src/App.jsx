import React from 'react'
import './global.css'

function App() {
  const Contactos = [
    {
      nombre: 'Adrian Mogus',
      avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07EVD3GPV2-4c4cd3e0784e-192',
      estado: 'Disponible'
    },
    {
      nombre: 'Emanuel Carreira',
      avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07F5J8NGCR-ec3380dac16d-192',
      estado: 'NoDisponible'
    },
    {
      nombre: 'Angela',
      avatar:'https://ca.slack-edge.com/T07EJ2FLZ2R-U07Q3A53DMH-f410e4731970-512',
      estado: 'NoDisponible'
    },
    {
      nombre: 'Candia',
      avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07ESQU0R7D-ea383db445e8-512',
      estado: 'NoDisponible'
    },
    {
      nombre: 'Luciano Leone',
      avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07FFMZ9CM6-98d9c3a92a85-192',
      estado: 'Disponible'
    },
    {
      nombre: 'Claudia Varella',
      avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07ESU3M13L-e4c619eb0508-512',
      estado: 'NoDisponible'
    },
    {
      nombre: 'Lucas Legor',
      avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07F5J8DSQH-773273a440d1-512',
      estado: 'Disponible'
    }
  ]  
    const ContactosJSXList = Contactos.map((contacto) => {
      return (
        <div className='contactListContact'>
          <div className='contactImg'>
            <img className='contactAvatar' src={contacto.avatar} alt='avatar' />
            <div className={`status${contacto.estado}`}></div>
          </div>
          <span className='contactName'>{contacto.nombre}</span>
        </div>
      )
    }) 
  
  return (
    <div className='contactList'>
      {ContactosJSXList}
    </div>
  )
}

export default App
