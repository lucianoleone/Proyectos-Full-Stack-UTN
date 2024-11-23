
import React from "react"
function App() {

  let statusServer = 'cerrado'
  let espacio = 12  
  let espacioMaximo = 12 

  return (
      <div>
        <h1>Status Server: {statusServer}</h1>
        {
          statusServer === 'abierto'
          ? <button>Cerrar</button>
          : <button>Abrir</button>
        }
        { espacio >= espacioMaximo-2 &&  (
          <div>
            {
              espacio ===espacioMaximo
              ? <span> Has consumido el espacio maximo</span> 
              : <span> Espacio disponible: {espacioMaximo-espacio}</span>      }
            <button>Mejorar Plan</button>
          </div>)
        } 
      </div>
  )
}
export default App