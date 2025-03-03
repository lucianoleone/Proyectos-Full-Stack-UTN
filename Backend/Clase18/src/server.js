import ENVIROMENT from './config/enviroment.config.js'
import express from 'express'
import registerRouter from './routes/register.router.js'
import mongoose from './config/mongoDB.config.js'
import UserRepository from './repositories/user.repository.js'
import bcrypt from 'bcrypt'
import sendMail from './utils/mailer.utils.js'
import cors from 'cors'
import { authMiddleware } from './middlewares/authMiddleware.js'
import workspaceRouter from './routes/workspace.router.js'
import channelRouter from './routes/channel.router.js'

const app = express()
app.use(cors())

app.use(express.json()) 

//console.log(ENVIROMENT)
//sendMail({to: 'luciano.leone@gmail.com', subject: 'hola', html: '<h1>hola</h1>'})
app.listen(ENVIROMENT.PORT, () => {
    console.log(`el servidor esta ejecutandose en http://localhost:${ENVIROMENT.PORT}`)
})

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
//UserRepository.create({username: 'pepe', email: 'pepe@gmail.com', password: 'pepe123'})
app.use('/api/auth',registerRouter)
app.use('/api/workspace',workspaceRouter)
app.use('/api/channels',channelRouter)
app.get('/api/test/comprar', authMiddleware, (req, res) =>{
    
    console.log(req.user)
    res.json({
        message: 'Producto comprado'
    })

})



