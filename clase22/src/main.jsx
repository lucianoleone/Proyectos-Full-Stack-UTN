

import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {sumar,restar,multiplicar,dividir,pi} from './math.js'


/* 
createRoot es una funcion a la cual le puedo pasar el elementoHTML del dom donde queremos renderizar nuesta app de react
*/

console.log(dividir(1,2))

createRoot(document.getElementById('root')).render(
  <App />
)