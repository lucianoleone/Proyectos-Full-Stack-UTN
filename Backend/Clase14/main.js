import express from 'express'
import authRouter from './routes/auth.router.js';
import userRouter from './routes/users.router.js';
import productRouter from './routes/product.router.js';


const PORT= 3000
const app = express()

app.use(express.json())
//app.use('/api/auth',authRouter)
// app.get('/test/:limit',(req,res)=>{
//     console.log(req.params)
//     res.send({ok: true})
// })
//app.use('/api/users', userRouter)
// app.get('/test/:limit', (req, res) =>{
//     console.log(req.params)
//     res.send({ok: true})
// })
//app.use('/api/users',deleteUserRouter)
app.use('/api/product',productRouter)
app.listen(PORT,()=>{
    console.log(`el servidor esta ejecutandose en http://localhost:${PORT}`)
})

/*
crear una nueva ruta api/users

GET /api/users devuelve toda la lista de usuarios (no devolveremos las contraseñas)
DELETE /api/users/:email elimina un usuario
PUT /api/users/:email actualiza un usuario por body

*/
