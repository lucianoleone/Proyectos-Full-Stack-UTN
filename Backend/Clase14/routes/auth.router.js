import express from "express";
import filesystem from "fs";  // Agregamos import del filesystem
import { ServerError } from "../utils/error.util.js";
import { createUser } from "../repository/user.repository.js";
import { registerController } from "../Controllers/auth.controller.js";



const authRouter = express.Router();

//funcion para crear usuarios y guardarlos el en el archivo usuario.json


// endpoint de registro de nuevos usuarios
authRouter.post('/register',registerController)


export default authRouter;  // Agregamos la exportación

authRouter.post('/login', (req, res) => {
    res.send(
        {
            meesage: 'Logged succefully'
        }
    )
})



/*
crear una nueva ruta api/users

GET /api/users devuelve toda la lista de usuarios (no devolveremos las contraseñas)
DELETE /api/users/:email elimina un usuario
PUT /api/users/:email actualiza un usuario por body

*/






