import React, { useContext, useEffect } from 'react'
import { useForm } from '../hooks/useForm'
import useApiRequest from '../hooks/useApiRequest'
import ENVIROMENT from '../config/enviroment'
import { Link, Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
const LoginScreen = () => {
  const {login}= useContext(AuthContext)
  const initialFormState = {
    email: 'email',
    password: ''
  }
  
  const {formState, handleChangeInput}= useForm(initialFormState)
  console.log(formState)
  const{responseApiState, postRequest}= useApiRequest(ENVIROMENT.URL_API+ '/api/auth/login')
  useEffect(
    ()=>{
        if(responseApiState.data) {
            login(responseApiState.data.data.authorization_token)
        }
    },
    //Cada vez que cambie mi estado de respuesta ejecutare el efecto
    [responseApiState]  
)

  const handleSubmitForm = async (event) => {
    event.preventDefault()
    await postRequest(formState)
    //login(responseApiState.payload.data.authorization_token)
    
  }
  return (
    <div>
      <h1>Inicia Sesion en nuestra pagina</h1>
      <form onSubmit={handleSubmitForm}>
               
      <div>
                    <label htmlFor="email">Email</label>
                    <input placeholder="Email" type="email" id="email" name='email' value={formState.email} onChange={handleChangeInput}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input placeholder="Password" type="password" id="password" name='password' value={formState.password} onChange={handleChangeInput}/>
                </div>
                <div>
                  <Link to="/reset-password">Olvide mi contraseña</Link>
                </div>
          
            
          
          {responseApiState.error && <span>{responseApiState.error}</span>}
         
          {responseApiState.loading
          ? <span>Cargando...</span>
          : <button type="submit">Iniciar Sesion</button>
          }
        
      </form>
    </div>



  )
}

export default LoginScreen