import React from 'react'
let [contador, setContador] = useState(1)
const EstadosScreen = () => {
  return (
    <div>EstadosScreen</div>
  )
}
const incrementar = () => {
  //llamo a la funcion setting
  setContador(contador + 1)
}

const decrementar = () => {
  setContador(contador - 1)
}
const handleShowHiddenText = () =>{
  //Es necesario pasar una callback? Si conviene
  setIsHiddenText(
      (prevTextIsHiddenState) => {
          return !prevTextIsHiddenState
      }
  )
}

export default EstadosScreen
//rafce  = react arrow function component export default
// Un componente de react exportada por defecto

