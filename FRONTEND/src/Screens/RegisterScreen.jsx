import React, { useState } from 'react'
import ENVIROMENT from '../config/enviroment'
//import { data } from 'react-router-dom'
import { ServerError } from '../utils/error.util'
import { useForm } from '../hooks/useForm'
import useApiRequest from '../hooks/useApiRequest'

const RegisterScreen = () => {
    const formInitialState = {
        username: '',
        email: '',
        password: ''
    }
    const {formState, handleChangeInput}= useForm(formInitialState)
    const {responseApiState, postRequest} = useApiRequest(ENVIROMENT.URL_API+ '/api/auth/register')
    const handleSubmitForm = async (event) => {
        event.preventDefault()
        await postRequest(formState)
    }
    
    return (
        <div>
            <h1>Registrate en nuestra app</h1>
            <form onSubmit={handleSubmitForm}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input placeholder="Username" type="text" id="username" name='username' value={formState.username} onChange={handleChangeInput}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input placeholder="Email" type="email" id="email" name='email' value={formState.email} onChange={handleChangeInput}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input placeholder="Password" type="password" id="password" name='password' value={formState.password} onChange={handleChangeInput}/>
                </div>
                {
                    responseApiState.error &&
                    <p style={{color: 'red'}}>{responseApiState.error}</p>
                }
                {responseApiState.loading 
                ? 'Cargando...' 
                : <button type='submit'>Registrar</button>
                }    
            </form>
        </div>
        )
    }

export default RegisterScreen