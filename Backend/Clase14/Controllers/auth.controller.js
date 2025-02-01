import { createUser } from "../repository/user.repository.js"
import { ServerError } from "../utils/error.util.js"

export const registerController = async (req, res) => 
    { 
        try {
            const {username, email, password} = req.body
            if(!username){ //este if es para verificar si el username esta vacio
                throw new ServerError('username is required', 400) //400 es el codigo de error de bad request por no tener usuario        }
            }
            if(!email){ //este if es para verificar si el email esta vacio
                throw new ServerError('email is required', 400) //400 es el codigo de error de bad request por no tener email
            }
            if(!password){ //este if es para verificar si el password esta vacio
                throw new ServerError('password is required', 400) //400 es el codigo de error de bad request por no tener password
            }
            const users = await createUser({username, email, password})
            console.log(users)
            return res.send({ok: true})
            }
            
        catch (error) {
            console.log('error en el registro', error)
            if(error.status){ //este if es para verificar si el error tiene un status, si lo tiene enviamos el ok false, el mensaje y el status
                return res.send(
                    {
                        ok: false,
                        message: error.message,
                        status: error.status
                    }
                )
            }
            return res.send({
                ok: false,
                message: 'Internal Server error',
                status: 500
            })
        }
    } 