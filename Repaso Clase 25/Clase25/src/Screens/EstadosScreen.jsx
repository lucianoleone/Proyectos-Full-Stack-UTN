import React, { useState } from 'react'

const EstadosScreen = () => {
    const [contador, setContador] = useState(1);
    const [minimo, setMinimo] = useState(true);
    const Incrementar = () => {
        setContador(contador + 1);
        setMinimo(true);
    }
    const Decrementar = () => {
        if(contador > 0){
        setMinimo(true)
        setContador(contador - 1)
        }
        else{
            setMinimo(false);
        }
    }

    return (
        <div>
            <h1>Estados en React</h1>
            <button onClick={Decrementar}>Decrementar</button>
            <span> {contador} </span>
            <button onClick={Incrementar}>Incrementar</button>
            <span hidden={minimo}>El contador no puede ser negativo</span>
        </div>
    )
}


export default EstadosScreen