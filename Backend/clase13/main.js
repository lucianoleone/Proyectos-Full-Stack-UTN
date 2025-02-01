import express from 'express';
import filesystem from 'fs';
const PORT = 3000;

const app = express();

app.use(express.json());
app.get('/', (req, res) => {
    res.send('<h1>Hola desde la api</h1>') //esto le manda la respuesta (res) al request de / con un  console log e interpreta el html
})
app.listen (PORT, () => {
    console.log(`La app esta escuchando en el puerto ${PORT}`);
})

// //app listen es uan funcion que recibe dos parametros el primero es el puerto y el segundo es una funcion callback que se ejecuta cuando el servidor esta escuchando
// app.get('/date',(req, respond) => {
//     respond.send(
//         {fecha_actual:new Date()}
//     )
// })

// app.post('/products', (consulta, respuesta) => {
//     console.log (consulta.body);
//     const productos = []
//     const {name, precio, marca, es_usado} = consulta.body
//     const newProduct = {
//         name,
//         precio,
//         marca,
//         es_usado
//     }
//     productos.push(newProduct)
//     respuesta.send({
//         meessage: 'producto creado satisfactoriamente',
//         productos: productos}
//     )
// })

/*crea una consulta app.post que reciba un producto y lo guarde en el archivo productos.json  ubicado en la carpeta database de la clase 13
realizarlo utilizando asinctronia+promesas
crear una funcion guardar usuario que modifique el filesystem*/
app.post('/productos', async (consulta, respuesta) => {
    const {name, precio, marca, es_usado} = consulta.body
    const newProduct = {
        name,
        precio,
        marca,
        es_usado
    }
    const productos = await guardarProducto(newProduct)
    respuesta.send({
        meesage: 'producto creado satisfactoriamente',
        productos: productos
    })
    
})
const guardarProducto = async (producto) => {
    
    const productosArray = JSON.parse(await filesystem.promises.readFile('./database/productos.json',{encoding: 'utf-8'} ))
    productosArray.push(producto)
    await filesystem.promises.writeFile('./database/productos.json', JSON.stringify(productosArray), {encoding: 'utf-8'})
    return productosArray
as    
}
app.get('/leerproductos', async (consulta, respuesta) => {
    const productos = await leerArchivo('./database/productos.json')
    respuesta.send(productos)
    
})
const leerArchivo = async (archivo) => {
    try {
        const resultado = await filesystem.promises.readFile(archivo, 'utf-8');
        const productos = JSON.parse(resultado)
        return productos
    } catch (error) {
        console.log(error);
    }
}

