import React from 'react'
import ExtractFormData from '../helpers/ExtractFormData'

const FormulariosScreen = () => {

    const handleSubmitUncontrolledForm = (evento) => {
        const form_jsx = evento.target
        evento.preventDefault()
        const form_values = ExtractFormData(form_jsx)
        console.log(form_values)
        
    }
    return (
        <div>
            <h1>Formularios en React</h1>
            <form onSubmit={handleSubmitUncontrolledForm}>
                <label htmlFor="nombre">Ingrese su nombre</label>
                <input type="nombre" id='nombre' name='nombre'/>
                <label htmlFor="apellido">Ingrese su Apellido</label>
                <input type="apellido" id='apellido' name='apellido'/>
                <button type='submit'>Enviar</button>
            </form>            
        </div>
    )
}

export default FormulariosScreen