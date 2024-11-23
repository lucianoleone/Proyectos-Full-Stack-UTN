/* 
Crear en HTML un span que tenga un id que sea 'resultado'
Solicitar al usuario 2 numeros y sumarlos (pueden usar propmts)
Mostrar en el texto del span: 'El resultado de sumar {numero1} y {numero2} es {resultado}'


let numero1 = prompt("Ingresa el primer numero")
let numero2 = prompt("Ingresa el segundo numero")
let resultado = Number(numero1) + Number(numero2)
document.getElementById("resultado").innerHTML = `El resultado de sumar ${numero1} y ${numero2} es ${resultado}`
/*let texto = document.getElementById("resultado")
texto.innerHTML = `El resultado de sumar ${numero1} y ${numero2} es ${resultado}`*/

// const userInfo = {
//     nombre : 'Luciano Leone',
//     imagen : 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07FFMZ9CM6-98d9c3a92a85-192',
//     mail : 'luciano.leone@gmail.com',
//     ultimaConexion : "20:20 (hora local)"
// }

// const userInfoHTML = document.getElementById("userInfo")
// userInfoHTML.innerHTML = `
// <div>
//     <img src="${userInfo.imagen}">
//     <h2> Nombre: ${userInfo.nombre} </h2>
// </div>
// <div>
//     <span> Mail: ${userInfo.mail} </span>
//     <br>
//     <span> Ultima Conexión: ${userInfo.ultimaConexion} </span>
// </div>
// `
const mercadoHTML = document.getElementById("mercado")
const productos = [
    {
        nombre: 'tv samsung 32"',
        precio: 300,
        stock: 4,
        comprado: true
    },
    {
        nombre: 'tv samsung 43"',
        precio: 400,
        stock: 4,
        comprado: false
    },
    {
        nombre: 'tv samsung 50"',
        precio: 600,
        stock: 40,
        comprado: true
    },
    {
        nombre: 'tv samsung 100"',
        precio: 10000,
        stock: 2,
        comprado: false
    }
]
let resultado = ''


for ( let producto of productos){
    let productoComprado = producto.comprado
    resultado= resultado + 
    `<div>
        <h2> ${producto.nombre} </h2>
        <span>Precio $${producto.precio} </span>
        <span> Unidades Disponibles ${producto.stock} </span>
        <br>
        ${
            productoComprado
            ? '<button>Comprado</button>' 
            : '<button>Comprar</button>'
        }
        <hr>
    </div>` 
}

mercadoHTML.innerHTML = resultado
