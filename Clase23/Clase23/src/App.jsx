import React from 'react'

function App() {
  // let num1=1
  // let num2=2
  // let estaComprado=true
  // let statusServer='cerrado'
  let espacioUtilizado = 9
  let espacioTotal = 10
  let porcentajeDeEspacioLimite = (espacioTotal * 0.2)
  let espacioCercaDelLimite = espacioUtilizado > (espacioTotal - porcentajeDeEspacioLimite)
  return (
    <div>
      {/* <h1>Hola</h1>
      {/* <h2>El resultado de sumar {num1} y {num2} es:  {num1+num2}</h2>
      {estaComprado
      ? <button>Comprar</button>
      : <button>Comprado</button>
    } */}
    {/* {estaComprado && <a href='#'>Comprar</a>}
    <h1>Status Server: {statusServer}</h1>
    {statusServer === 'abierto'
      ? <button>Cerrar</button>
      : <button>Abrir</button>
    } */}
    
    {
      espacioCercaDelLimite 
      &&
      (
        <div>
          {
          espacioUtilizado === espacioTotal
          ? <span> Utilizaste todo el espacio disponible </span>
          : (
              espacioUtilizado > espacioTotal
              ? <span> Estas sobrepasado de espacio</span> 
              : <span>Estas cerca de llegar al limite de almacenamiento</span>
          )
        }
          
          <a href="#">Mejorar Plan</a>
      </div>
      )      
        
    }
    </div>
  )
}

export default App

function Caja (){
  return (
    <div>Hola</div>
  )
}

