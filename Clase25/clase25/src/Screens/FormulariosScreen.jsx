import React from 'react'
import extractFormData from '../Components/helpers/exctractFormData'
const FomulariosScreen = () => {
    const handleSubmitUncontrlledForm = (evento) => {
        evento.preventDefault()
        console.log('Formulario enviado')
        const form_jsx = evento.target
        const form_data = new FormData(form_jsx)

        console.log(form_data.get('name'))
        const nombre = form_data.get('name')
        const form_keys = form_data.keys().toArray()
        const form_values = {}
        for (let key of form_keys) {
            form_values[key] = form_data.get(key)
        }
    }
    const from_values = extractFormData()
    return (
        <div>
            <h1>Formularios en React</h1>
            <form onSubmit={handleSubmitUncontrlledForm}>
                <label htmlFor="nombre">Ingrese su nombre</label>
                <input type="nombre" id='nombre' />
                <button type='submit'>Confirmar</button>
            </form>
        </div>
    )
}
export default FomulariosScreen