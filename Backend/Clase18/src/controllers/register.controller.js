
import UserRepository from "../repositories/user.repository.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import ENVIROMENT from "../config/enviroment.config.js"
import sendMail from "../utils/mailer.utils.js"
import { ServerError } from "../utils/error.utils.js"


export const registerController = async (req, res) => {
    try {
        const { username, email, password } = req.body;


        if (!username) {
            throw new ServerError("username is required", 400);
        }
        if (!email) {
            throw new ServerError("email is required", 400);
        }
        if (!password) {
            throw new ServerError("password is required", 400);
        }


        const passwordHash = await bcrypt.hash(password, 10)
        const verification_token= jwt.sign(
            {email},                    //lo que queremos guardar en el token
            ENVIROMENT.SECRET_JWT_KEY,  //clave con la que vamos a firmar
            {expiresIn: '24h'})         //fecha de expiracion del token
        await UserRepository.create({username, password: passwordHash, email, verification_token: verification_token})
        sendMail({
            to: email,
            subject: 'Valida tu cuenta',
            html: `
            <h1>Gracias por registrarte en Nohma</h1>
            <p>Para validar tu cuenta haz click en el siguiente enlace</p>
            <a href="${ENVIROMENT.URL_BACKEND}/api/auth/verify-email?verification_token=${verification_token}">Validar cuenta</a>`
        })
       console.log('usuario creado con exito')
        return res.status(201).send(
                {
                    message: "user created",
                    status: 201,
                    ok: true
                }
        );
    } catch (error) {
        console.log('error en el registro', error)
        if(error.status){
            return res.send({
                ok: false,
                message: error.message,
                status: error.status
            });
        }
        return res.send({
            ok: false,
            message: error.message,
            status: 500
        });
    }
}

export const verifyEmailController = async (req, res) => {
    try {
        const {verification_token} = req.query
        console.log(verification_token)
        const payload = jwt.verify(verification_token, ENVIROMENT.SECRET_JWT_KEY) //esta funcion no es asincronica
        const {email} = payload //desesctructurar email
        const user_found = await UserRepository.findUserByEmail(email)
        res.redirect(ENVIROMENT.URL_FRONTEND+'/login')  
        if(!user_found){
            
                throw new ServerError('user not found', 404)
            }
                 
        if(user_found.verified){
            
                throw new ServerError('user already verified', 400)
        
            }

        
        user_found.verified = true
        await user_found.save()
        return user_found
    }
        
    catch (error) {
        console.log('error en el registro', error)
        if(error.status){
    }
}
}

export const loginController = async (req, res) => {
    try {
        const {email, password} = req.body
        const user_found = await UserRepository.findUserByEmail(email)
        if(!user_found){
            throw new ServerError('user not found', 404)
        }
        if(!user_found.verified){
            throw new ServerError('user not verified', 400)
        }
        const isSamePassword = await bcrypt.compare(password, user_found.password) //comparar la contraseña ingresada con la contraseña almacenada encriptada
        if(!isSamePassword){
            throw new ServerError('invalid credentials', 401)
        }
        const authorization_token = jwt.sign(
            {
                _id: user_found._id,
                username: user_found.username,
                email: user_found.email},                    //lo que queremos guardar en el token
                ENVIROMENT.SECRET_JWT_KEY,  //clave con la que vamos a firmar
                {expiresIn: '24h'})         //fecha de expiracion del token
        return res.json({
            ok: true, 
            status: 200,
            message: 'user logged in',
            data: {
                authorization_token
            }
        })
    } catch (error) {
        console.log('error en el registro', error)
        if(error.status){
            return res.send({
                ok: false,
                message: error.message,
                status: error.status
            });
        }
        return res.send({
            ok: false,
            message: error.message,
            status: 500
        });
    }
}


export const resetPasswordController = async (req, res) => {
    try {
        console.log(req.body)
        const {email} = req.body
        const user_found = await UserRepository.findUserByEmail(email)
        if(!user_found){
            throw new ServerError('user not found', 404)
        }
        if(!user_found.verified){
            throw new ServerError('user not verified', 400)
        }
        const reset_token = jwt.sign(
            {email,
            _id: user_found._id},                    //lo que queremos guardar en el token
            ENVIROMENT.SECRET_JWT_KEY,  //clave con la que vamos a firmar
            {expiresIn: '2h'})         //fecha de expiracion del token
        
        await sendMail({
            to: email,
            subject: 'Restablece tu contraseña',
            html: `
            <h1>Restablece tu contraseña</h1>
            <p>Para restablecer tu contraseña haz click en el siguiente enlace, sino deseas restablecer tu contraseña ignora este correo</p>
            <a href='${ENVIROMENT.URL_FRONTEND}/rewrite-password?reset_token=${reset_token}'>Restablecer contraseña</a>`
        })
        res.json(
            {
                ok: true, 
                status: 200,
                message: 'email sent',
            }
        )
    } catch (error) {
        console.log('error en el registro', error)
        if(error.status){
            return res.send({
                ok: false,
                message: error.message,
                status: error.status
            });
        }
        return res.send({
            ok: false,
            message: error.message,
            status: 500
        });
    }
}

export const rewritePasswordController = async (req, res) => {
    try {
        const { password, reset_token } = req.body;
        console.log(password, reset_token)
        // Verifica si password y reset_token existen
        if (!password || !reset_token) {
            return res.status(400).json({
                ok: false,
                message: 'Password and reset_token are required',
                status: 400
            });
        }

        // Verifica que el token sea válido
        const { _id } = jwt.verify(reset_token, ENVIROMENT.SECRET_JWT_KEY);

        // Hashear la nueva contraseña
        const newHashedPassword = await bcrypt.hash(password, 10);

        // Llamada al repositorio para cambiar la contraseña del usuario
        await UserRepository.changeUserPassword(_id, newHashedPassword);

        return res.json({
            ok: true,
            message: 'Password changed successfully',
            status: 200
        });

    } catch (err) {
        console.log(err);
        // Si hay un error con el status, lo retornamos
        if (err.status) {
            return res.send({
                ok: false,
                status: err.status,
                message: err.message
            });
        }

        // Para errores internos
        return res.status(500).send({
            message: "Internal server error",
            status: 500,
            ok: false
        })
    }


}
/* 
Crea una ruta llamada /api/auth

/register accedido con metodo post, por body recibira un json
body
{
username
email
password
}


    response :
{
    message: "user registered",
    status: 201,
    ok: true
}
*/