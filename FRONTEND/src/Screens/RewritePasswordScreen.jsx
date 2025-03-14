import React, { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
import useApiRequest from "../hooks/useApiRequest";
import ENVIROMENT from "../config/enviroment";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const RewritePasswordScreen = () => {
    //const [searchParams] = useSearchParams(window.location.search) otra forma parecida
    const navigate = useNavigate()
    const [searchParams] = useSearchParams(window.location.search)
    const reset_token = searchParams.get('reset_token')
    useEffect(
        () => {
       
        if(!reset_token){
            navigate('/login')
        }

        },
        []
    )
    const initialFormState = {
        password: ''
    }
    const {formState, handleChangeInput}= useForm(initialFormState)
    const {responseApiState, putRequest} = useApiRequest(ENVIROMENT.URL_API+ '/api/auth/rewrite-password')
    
    useEffect(
        ()=>{
            if(responseApiState.data) {
                navigate('/login')
            }
        }, 
        [responseApiState]
    )
    
    const handleSubmitForm = async (event) => {
        event.preventDefault()
        await putRequest({password: formState.password, reset_token})
        navigate('/login')
    }
    return(
        <div>
            <h1>Restore Password</h1>
            <form onSubmit={handleSubmitForm}>
            <div>
                <label htmlFor="password">new password</label>
                <input 
                    type="text" 
                    name="password" 
                    id="password" 
                    value={formState.password} 
                    onChange={handleChangeInput}
                />
            </div>
            <div>
                {responseApiState.error && <span color="red">{responseApiState.error}</span>}
                {
                    responseApiState.loading
                    ?<span>Cargando...</span>
                    :(
                    responseApiState.payload
                    ? <span>Password Restored</span>
                    : <button type="submit">Restore Password</button>
                    )
                    
                }

            </div>
            </form>
        </div>
    )
}

export default RewritePasswordScreen;