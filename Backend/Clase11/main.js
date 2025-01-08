// console.log('hola mundo');

const { crearArchivo, leerArchivo } = require("./filesystem")

// let numero_1 = 4
// let numero_2 = 12

// const valor_importado=require('./matematicas.js')

// console.log(` la resta de ${numero_1} y ${numero_2} es:`, valor_importado.restar(numero_1,numero_2))
// console.log(valor_importado.sumar(numero_1,numero_2))
// const {sumar,restar}=require('./matematicas.js')

// console.log(` la resta de ${numero_1} y ${numero_2} es: ${restar(numero_1,numero_2)}`)
// console.log(` la sumade ${numero_1} y ${numero_2} es: ${restar(numero_1,numero_2)}`)

// // crear un archivo dentro de una carpeta llamada utils denominado impuestos, dentro de impuestos.js  crear una funcion que calcule el 21 porciento de ese precio

// const impuestos=require('./utils/impuestos.js')

// // console.log(impuestos(1000))
// function funcionproblematica(){
//     console.log(pepe)
// }
// console.log('ejecutando el archivo main.js')

// try {
//     funcionproblematica()
// } catch (error) {
//     console.log('ocurrio un error en la funcionaproblematica')    
// }

// console.log('accion super importante' )

/*
Estamos en una fintech y trabajmos sobre el proceso de validacion de credenciales

Vamos a llamar a la funcion validarCredenciales que internamente generara un numero random y si el numero es mayor a 0.5 devovlera un true de caso contrario emitira un error
con un mensaje de 'credenciales invalidas'

Si ocurre el error por consola debera mostrarse el siguiente mensaje: 'credenciales invalidas'
si todo esta bien debera mostrarse el siguiente mensaje: 'credenciales validas'
// */
// function validarCredenciales(){
//     const numeroRandom = Math.random()
//     if (numeroRandom > 0.5) {
//         console.log('credenciales validas')
//     } else {
//         throw ('credenciales invalidas')
//     }
// }

// try {
//     validarCredenciales()
// } catch (error) {
//     console.log ('ocurrio un error')    
//     console.log(error)
// }  
// const {crearArchivo, leerArchivo}=require('./filesystem.js')

// crearArchivo('test.txt','hola desde los lejanos mundos de node js')
// try {
    
//     console.log(leerArchivo('tes.txt'))
//     console.log('el archivo fue creado exitosamente');
// } catch (error) {
//     console.error('ERROR: El archivo no se pudo crear');
//     console.log(error);
//     return null
// }

const configuracion = {
    nivel_seguridad : 3,
    user_root : 'admin',
    password_root : 'admin2025'
}

crearArchivo('./config.json', JSON.stringify(configuracion))

const modificarNiveldeSeguridad = (nroNivel) => {   
    try {
    const configuracion = JSON.parse( leerArchivo('./config.json')
    )
    configuracion.nivel_seguridad = nroNivel
    crearArchivo('./config.json', JSON.stringify(configuracion))
    } catch (error) {
        console.error('No se puedo modificar el nivel de seguridad');
        console.log(error);
        return null
    }
}