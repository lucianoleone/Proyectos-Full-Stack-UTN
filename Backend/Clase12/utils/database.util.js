const { escribirArchivoJSON } = require("./filesystemManager.js")

const guardarEnDB = (nombre_coleccion, JSON_data) => {
    escribirArchivoJSON(`./database/${nombre_coleccion}`,JSON_data)  //esta funcion toma directamente la carpeta principal donde se esta ejecutando el proyecto no hace falta salir de la carpeta utils
}

module.exports = { guardarEnDB }
