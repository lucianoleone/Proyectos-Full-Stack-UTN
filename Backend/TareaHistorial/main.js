// # Consigna: Crear y Gestionar un Historial Usando Programación Orientada a Objetos en TypeScript
// En este ejercicio, vamos a crear un sistema básico de historial utilizando Programación Orientada a Objetos (POO) en TypeScript. Imagina que tienes una lista de acciones que un usuario realiza en una aplicación, y quieres guardar esas acciones en un historial para poder verlas más tarde, eliminarlas individualmente o limpiar todo el historial.
// ## Objetivo
// - **Crear una clase de historial** donde se puedan agregar, eliminar por ID y eliminar todas las acciones.
// - **Usar métodos avanzados de arrays** como filter, find, y findIndex para gestionar el historial.
// - **Aplicar conceptos de POO** como clases, objetos, métodos.
// ## Tareas
// 1. **Definir una clase Historial**:
//    - Esta clase tendrá una propiedad interna para almacenar las acciones en un array.
//    - Incluirá métodos para agregar una nueva acción, eliminar una acción por ID, eliminar todas las acciones y mostrar el historial.
// 2. **Crear una clase Accion**:
//    - Cada acción será representada por una instancia de la clase Accion.
//    - Esta clase tendrá propiedades para id, descripcion y fecha, nombre.
// 3. **Crear métodos en la clase Historial**:
//    - **agregarAccion(accion)**: Método para agregar una nueva acción al historial.
//    - **eliminarAccionPorID(id)**: Método para eliminar una acción específica del historial usando su ID.
//    - **eliminarTodo()**: Método para eliminar todas las acciones del historial.
//    - **mostrarHistorial()**: Método para mostrar en la consola todas las acciones en el historial.
// ## EJEMPLOS
// HISTORIAL {
//    accion_id_counter: 0,
//    acciones: [] // Array de acciones
// }
// Accion {
//    id,
//    descripcion,
//    fecha,
//    nombre
// }
var Accion = /** @class */ (function () {
    function Accion(id, descripcion, fecha, nombre) {
        this.id = id;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.nombre = nombre;
    }
    return Accion;
}());
var Historial = /** @class */ (function () {
    function Historial(id_historial) {
        this.acciones = [];
        this.id_contador = 0;
        this.id_historial = 0;
        this.id_historial = id_historial;
    }
    Historial.prototype.agregarAccion = function (descripcion, fecha, nombre) {
        var agregar_accion = new Accion(this.id_contador, descripcion, fecha, nombre);
        this.id_contador = this.id_contador + 1;
        this.acciones.push(agregar_accion);
    };
    Historial.prototype.encontrarAccionPorId = function (id_encontrado) {
        var index = this.acciones.findIndex(function (accion) { return accion.id == id_encontrado; });
        if (index === -1) {
            console.log('No se encontró ninguna accion con ese ID');
            return false;
        }
        var accion_encontrada = this.acciones[index];
        return accion_encontrada;
    };
    Historial.prototype.eliminarAccionPorId = function (id_encontrado) {
        var index = this.acciones.findIndex(function (accion) { return accion.id == id_encontrado; });
        if (index !== -1) {
            this.acciones.splice(index, 1);
            console.log('La acción ha sido eliminada con éxito');
            return true;
        }
        else {
            console.log('No se encontró ningún ID que coincida con el que proporcionaste.');
            return false;
        }
    };
    Historial.prototype.eliminarTodo = function () {
        this.acciones = [];
        this.id_contador = 0;
    };
    Historial.prototype.mostrarHistorial = function () {
        console.log('Historial de acciones: ', this.acciones, 'fin del historial');
    };
    return Historial;
}());
var primera_accion = new Historial(1);
primera_accion.agregarAccion('Se ha creado un nuevo usuario', new Date(), 'Crear usuario');
primera_accion.agregarAccion('Se han guardado los datos del nuevo usuario de manera exitosa', new Date(), 'Guardando datos del nuevo usuario');
primera_accion.agregarAccion('Se ha iniciado sesión con el nuevo usuario', new Date(), 'Inicio de sesión');
primera_accion.mostrarHistorial();
console.log(primera_accion.encontrarAccionPorId(1));
var respuesta_eliminar = primera_accion.eliminarAccionPorId(2);
console.log(respuesta_eliminar);
console.log(primera_accion.acciones);
primera_accion.eliminarTodo();
console.log('Historial actualizado: ', primera_accion.acciones);
