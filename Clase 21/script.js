//metodo con callback funciones invocando funciones
/*
function filtrar (lista, callbackFnCondicion){
    const result = []
    for(const elemento of lista){
        //Invoco a mi funcion y le paso el elemento
        if(callbackFnCondicion(elemento)){
            result.push(elemento)
        }
    }
    return result
}

function condicionRemuneracionCaros (usuario){
    return usuario.remuneracion > 3500
}
//funcion de javascript que ya viene por defecto
const resultado = users.filter(
    function(usuario){
        return usuario.remuneracion > 2500
    }
)
console.log(resultado)

//Productos: precio, nombre, stock, descripcion, id
*/
const products = [
    {
        precio: 2000,
        nombre: 'Laptop',
        stock: 40,
        id: 1,
        descripcion: 'Laptop de 15 pulgadas'
    },
    {
        precio: 3000,
        nombre: 'Tablet',
        stock: 3,
        id: 2,
        descripcion: 'Tablet de 10 pulgadas'
    },
    {
        precio: 4000,
        nombre: 'Monitor',
        stock: 2,
        id: 3,
        descripcion: 'Monitor de 15 pulgadas'  
    },
    {
        precio: 5200,
        nombre: 'Monitor',
        stock: 2,
        id: 80,
        descripcion: 'Monitor de 25 pulgadas'  
    },
    {
        precio: 5000,
        nombre: 'Mouse',
        stock: 10,
        id: 4,
        descripcion: 'Mouse'
    },
    {
        precio: 6000,
        nombre: 'Teclado',
        stock: 70,
        id: 5,
        descripcion: 'Teclado'
    },
    {
        precio: 7000,
        nombre: 'Audifonos',
        stock: 4,
        id: 6,
        descripcion: 'Audifonos'
    }
]

//Filtrar por los productos que su stock sea mayor o igual a 5

const filtro = products.filter(
    function(producto){
        return producto.stock >= 5
    }
)
console.log(filtro)*/


//Filtrar por los productos que su precio este entre 4500 y 5500
const filtro = products.filter(
    function(producto){
        return producto.precio > 4500 && producto.precio < 5500
    }
)
console.log(filtro)
//Filtrar por los productos que su descripcion contenga la palabra 'Moni'

const filtro = products.filter(
    function(producto){
        return producto.descripcion.includes('Moni')
    }
)
console.log(filtro)