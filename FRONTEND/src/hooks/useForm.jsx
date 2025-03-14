import { useState } from "react"
export const useForm = (formInitialState) => {
    
    const [formState, setFormState] = useState(formInitialState)
    //Objetivo: modificar el estado del formuilario a medida se vaya ejecutando el evento change en los distintos input
    const handleChangeInput = (event) => {
        const {name, value} = event.target
        //vamos a hacer la famosa clonacion
        setFormState(
            (prevFormState) => {
                return {...prevFormState ,[name]:value}//aca rompimos la referencia
                }
            )
        //formState[event.target.name] = event.target.value asi no
    }
    return {formState, handleChangeInput}
}