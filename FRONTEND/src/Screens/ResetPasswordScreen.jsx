import React from "react"; 
import { useForm } from "../hooks/useForm";
import useApiRequest from "../hooks/useApiRequest";
import ENVIROMENT from "../config/enviroment";

const ResetPasswordScreen = () => {
    const formInitialState = {
        email:''
    }
    const {formState, handleChangeInput}= useForm(formInitialState)
    
    
    const {responseApiState, postRequest} = useApiRequest(ENVIROMENT.URL_API+'/api/auth/reset-password')
    
    const handleSubmitForm = async (event) => {
        event.preventDefault()
        await postRequest(formState)
        console.log(formState)
    }
    return (
        <div>
            <h1>Reset Password</h1>
            <form onSubmit={handleSubmitForm}>
                <div >
                    <label htmlFor="email">Email</label>
                    <input placeholder="Email" type="email" id="email" name='email' value={formState.email} onChange={handleChangeInput}/>
                </div>

                {
                responseApiState.error && <span>{responseApiState.error}</span>
                }
                {
                responseApiState.loading
                ?<span>Cargando...</span>
                :(  responseApiState.payload
                    ? <span>Revisa tu casilla de correo</span> 
                    : <button type="submit">Reset Password</button>)
                } 

                
            </form>
            
        </div>
    )
}


export default ResetPasswordScreen