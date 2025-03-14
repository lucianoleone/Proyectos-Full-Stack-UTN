import React from "react";
import ENVIROMENT from "../config/enviroment";
import useApiRequest from "../hooks/useApiRequest";

const ChannelScreen = () => {
    const initialFormState = {
        message: ''
    }
    const {formState, handleChangeInput} = useForm(initialFormState)
    const {responseApiState, putRequest} = useApiRequest(ENVIROMENT.URL_API+ '/api/')
    const handleSubmitForm = async (event) => {
        event.preventDefault()
        await putRequest(formState)
       
    }
    return (
        <div>
            <h1>Channel Screen</h1>
            <div>
                <aside>
                    <h1>Canales</h1>
                    <nav>
                        {/* armar listas de canales del workspace */}

                    </nav>
                </aside>

            </div>
            <div>
                <section>
                    {/* armar listas de mensajes */}
                </section>
            </div>
            <div>
                <form onSubmit={handleSubmitForm}>
                    <div>
                        <label htmlFor="message">Message</label>
                        <input placeholder="Escribe un mensaje" type="text" id="message" name='message' value={formState.message} onChange={handleChangeInput}/>
                    </div>
                    <button type='submit'>Enviar</button>
                </form>
            </div>
            
        </div>
    );
};

export default ChannelScreen;