const filesystem = require('fs');

const crearArchivo = (nombre, contenido) => {
    filesystem.writeFileSync(nombre, contenido, {encoding: 'utf-8'});    
}
const leerArchivo = (nombre) => {
    try {
        const result = filesystem.accessSync(nombre);
        return result
    } catch (error) {
        throw new Error('El archivo no existe');
    }
    
}

module.exports = {
    crearArchivo,
    leerArchivo    
}

