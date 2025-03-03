import express from "express";
import {loginController, registerController,  resetPasswordController,  rewritePasswordController,  verifyEmailController } from "../controllers/register.controller.js";
import { verifyLuckyMiddleware } from "../middlewares/verifyLuckyMiddleware.js";


const registerRouter = express.Router();

registerRouter.post('/register', registerController);
registerRouter.get('/verify-email', verifyEmailController)
registerRouter.post('/login',loginController)
registerRouter.post('/reset-password', resetPasswordController)
registerRouter.put('/rewrite-password', rewritePasswordController)
export default registerRouter;

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