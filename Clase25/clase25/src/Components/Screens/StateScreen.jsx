import React, { useState } from 'react'; 

const StateScreen = () => {
    
    const [contador, setContador] = useState(5) 
    const incrementar = () => setContador(contador + 1)
    const decrementar = ()  => {
        if (contador > 0) {
            setContador(contador - 1)
        } 
    };

return (
    <div> 
        <h1>Contador: {contador}</h1> 
        <button onClick={incrementar}>Incrementar</button> 
        <button onClick={decrementar}>Decrementar</button>
        {contador === 0 && <span>Contador no puede ser negativo</span>} 
    </div> 
        )
} 
export default StateScreen