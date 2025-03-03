//import { request } from "express"
import { ServerError } from "../utils/error.utils.js"
import jwt from 'jsonwebtoken'
import ENVIROMENT from "../config/enviroment.config.js"

export const authMiddleware = (request, response, next)=>{
    try {
        const authorization_header = request.headers['authorization']
        if (!authorization_header) {
            throw new ServerError("No has proporcionado un header de autorizacion", 401)
            
        }
        const authorization_token = authorization_header.split(' ')[1] //el split hace un array con el criterio de separacion
        if (!authorization_token) {
            throw new ServerError("No has proporcionado un token de autorizacion",401)
        }
        const user_info = jwt.verify(authorization_token, ENVIROMENT.SECRET_JWT_KEY)
        request.user = user_info //clave!!!
        next()
    } catch (error) {
        console.log("error al autentificar", error);

        if (error.status) {
            return response.json({
                ok: false,
                status: error.status,
                message: error.message
            });
        }

        response.json({
            status: 500,
            ok: false,
            message: "internal server error"
        });
    }
}