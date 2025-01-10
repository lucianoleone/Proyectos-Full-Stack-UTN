const filesystem = require('fs');

// const escribirArchivosJson = (nombre_archivo, JSON_data) => {
//     try {
//         filesystem.writeFileSync(`${nombre_archivo}.json`, JSON.stringify(JSON_data), {encoding: 'utf-8'});
//     }    
//     catch (error) {
//         console.error(`ERROR: El archivo ${nombre_archivo} no se pudo crear`);
//         console.log(error);
//     }
// }

// const escribirArchivoJSON = (nombre_archivo, JSON_data) =>{
//     try{
//         filesystem.writeFileSync(`${nombre_archivo}.json`, JSON.stringify(JSON_data), {encoding: 'utf8'})
//     }
//     catch(error){
//         console.error(`Error al crear el archivo ${nombre_archivo}.json`)
//         console.log(error)
//     }
// }

// module.exports = {escribirArchivoJSON}

// const escribirArchivoJSON = (nombre_archivo, JSON_data) =>{
    
//          filesystem.writeFile(
//              `${nombre_archivo}.json`, 
//              JSON.stringify(JSON_data), 
//              {encoding: 'utf8'},
//              (error) => {        //El error es un objeto con el posible error de la funcion
//                  if (error) {
//                      console.error(`Error al escribir el archivo ${nombre_archivo}.json`)
//              }
//              else{
//                  console.log(`El archivo ${nombre_archivo}.json fue creado exitosamente`)
//                  filesystem.readFile(`
//                      ${nombre_archivo}.json`, 
//                      'utf8', 
//                      (error, data) => {
//                          if (error) {
//                              console.error(`Error al leer el archivo ${nombre_archivo}.json`)
//                              console.log(error)
//                          }
//                          else{
//                              console.log(data)
//                          }
//                      }
//                  )
//              }
//          }
//          )
//      }
    
//     module.exports = {escribirArchivoJSON}

    // crear un archivo llamado numero1.txt e ingresar dentro de ese archivo un numero
    // crear un archivo llamado numero2.txt e ingresar dentro de ese archivo un numero

    // leer el archivo con Node.js numero_1.txt
    // leer el archivo con Node.js numero_2.txt

    // sumar los numeros

    // escribir el resultado en un archivo llamado resultado.txt

    // const leerYSumar = (nombre_archivo1, nombre_archivo2) => {
    //     filesystem.readFile(
    //         `${nombre_archivo1}`,
    //         'utf8',
    //         (error, data) => {
    //             if (error) {
    //                 console.error(`Error al leer el archivo ${nombre_archivo1}.txt`)
    //                 console.log(error)
    //             }
    //             else{
    //                 console.log(data)
    //                 filesystem.readFile(
    //                     `${nombre_archivo2}`,
    //                     'utf8',
    //                     (error, data2) => {
    //                         if (error) {
    //                             console.error(`Error al leer el archivo ${nombre_archivo2}.txt`)
    //                             console.log(error)
    //                         }
    //                         else{
    //                             console.log(data2)
    //                             let suma = Number(data) + Number(data2)
    //                             console.log(suma)
    //                             filesystem.writeFile(
    //                                 'resultado.txt',
    //                                 suma.toString(),
    //                                 {encoding: 'utf8'},
    //                                 (error) => {
    //                                     if (error) {
    //                                         console.error(`Error al escribir el archivo` )
    //                                     }
    //                                     else{
    //                                         console.log(`El archivo resultado.txt fue creado exitosamente`)
                                            
    //                                     }
    //                                 }
    //                             )
    //                         }
    //                     }
                    
                    
    //                 )
    //             }
            
    //         }
    //     )
    // }

    // const escribirArchivo = (nombre_archivo, {data}) => {
    //     filesystem.writeFile(
    //         `${nombre_archivo}.txt`,
    //         JSON.stringify(data),
    //         {encoding: 'utf8'},
    //         (error) => {
    //             if (error) {
    //                 console.error(`Error al escribir el archivo ${nombre_archivo}.json`)
    //             }
    //             else{
    //                 console.log(`El archivo ${nombre_archivo}.json fue creado exitosamente`)
    //             }
    //         }
    //     )
    // }
const leerArchivo = async () => {
    try {
        const resultado = filesystem.promises.readFile('numero1.txt', 'utf-8');
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}
    // 
    
    leerArchivo()