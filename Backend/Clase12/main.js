const filesystem = require('fs')
// console.log('hola mundo')
// const {escribirArchivoJSON}=require('./utils/filesystemManager.js')

// escribirArchivoJSON('test', {})

// const {guardarEnDB} = require('./utils/database.util.js')
// guardarEnDB('usuarios', {})

// const {escribirArchivoJSON} = require('./utils/filesystemManager.js')
// const {leerYSumar} = require('./utils/filesystemManager.js')
// leerYSumar('./numero1.txt', './numero2.txt')

// const {leerArchivo} = require('./utils/filesystemManager.js')
// leerArchivo()

const leerArchivo = async () => {
    try {
        const resultado = await filesystem.promises.readFile('numero1.txt', 'utf-8');
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}
    // 
    
    leerArchivo()