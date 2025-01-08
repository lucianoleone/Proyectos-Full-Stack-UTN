const filesystem = require('fs');

const crearArchivo = (nombre, contenido) => {
    filesystem.writeFileSync(nombre, contenido, {encoding: 'utf-8'});    
}
const leerArchivo = (nombre) => {
    return filesystem.readFileSync(nombre, {encoding: 'utf-8'});
}

module.exports = {
    crearArchivo,
    leerArchivo    
}

