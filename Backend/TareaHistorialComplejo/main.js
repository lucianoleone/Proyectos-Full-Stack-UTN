// ### Consigna: Crear y Gestionar un Historial Usando Programación Orientada a Objetos en TypeScript
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// En este ejercicio, desarrollarás un sistema de historial para registrar diferentes tipos de acciones que un usuario puede realizar en una aplicación, utilizando los principios de Programación Orientada a Objetos (POO) en TypeScript. Se implementarán clases base y derivadas, y se usará polimorfismo para manejar diversas acciones.
// ### Objetivos
// 1. **Crear una clase base `Accion`** que sirva como base para las diferentes acciones.
// 2. **Definir clases derivadas** que extiendan de la clase `Accion` para representar acciones específicas, como `AccionInicioSesion`, `AccionActualizacionPerfil`, `AccionCierreSesion`, `AccionCompra`, y `AccionEnvioMensaje`.
// 3. **Implementar una clase `Historial`** para almacenar y manejar acciones utilizando métodos avanzados de arrays como `filter` y `forEach`.
// 4. **Incorporar propiedades específicas** en las clases derivadas para almacenar información particular sobre las acciones.
// ### Requisitos
// #### 1. Clase Base `Accion`
// - **Propiedades**:
//   - `id`: número - Identificador único de la acción.
//   - `descripcion`: string - Descripción de la acción.
//   - `fecha`: Date - Fecha en que se realizó la acción.
// - **Métodos**:
//   - `mostrarDetalle()`: Imprime en la consola los detalles de la acción.
// #### 2. Clases Derivadas
// - **`AccionInicioSesion`** (hereda de `Accion`)
//   - **Propiedades adicionales**:
//     - `dispositivo_origen`: string - Dispositivo desde el cual se inició la sesión.
//   - **Métodos**:
//     - `mostrarDetalle()`: Sobrescribe para mostrar detalles específicos de inicio de sesión.
// - **`AccionCierreSesion`** (hereda de `Accion`)
//   - **Propiedades adicionales**:
//     - `dispositivo_origen`: string - Dispositivo desde el cual se cerró la sesión.
//     - `tiempo_de_sesion`: number - Duración de la sesión en minutos.
//   - **Métodos**:
//     - `mostrarDetalle()`: Sobrescribe para mostrar detalles específicos de cierre de sesión.
// - **`AccionActualizacionPerfil`** (hereda de `Accion`)
//   - **Propiedades adicionales**:
//     - `cambios`: `Cambio[]` - Array de objetos de tipo `Cambio`, cada uno representando un cambio realizado.
//   - **Métodos**:
//     - `mostrarDetalle()`: Sobrescribe para mostrar detalles específicos de actualización de perfil.
// - **Clase `Cambio`** (utilizada en `AccionActualizacionPerfil`)
//   - **Propiedades**:
//     - `id_cambio`: number - Identificador único del cambio.
//     - `valor_anterior`: string - Valor antes del cambio.
//     - `nuevo_valor`: string - Valor después del cambio.
//   - **Métodos**:
//     - `mostrarCambio()`: Imprime los detalles del cambio.
// - **`AccionCompra`** (hereda de `Accion`)
//   - **Propiedades adicionales**:
//     - `productos`: string[] - Array de nombres de productos comprados.
//     - `total`: number - Monto total de la compra.
//   - **Métodos**:
//     - `mostrarDetalle()`: Sobrescribe para mostrar detalles específicos de la compra.
// - **`AccionEnvioMensaje`** (hereda de `Accion`)
//   - **Propiedades adicionales**:
//     - `destinatario`: string - Nombre o dirección del destinatario.
//     - `mensaje`: string - Contenido del mensaje.
//   - **Métodos**:
//     - `mostrarDetalle()`: Sobrescribe para mostrar detalles específicos del envío de mensaje.
// #### 3. Clase `Historial`
// - **Propiedades**:
//   - `acciones`: `Accion[]` - Array que contiene todas las acciones.
// - **Métodos**:
//   - `agregarAccion(accion: Accion)`: Agrega una nueva acción al historial.
//   - `eliminarAccionPorID(id: number)`: Elimina una acción específica del historial usando su ID.
//   - `eliminarTodo()`: Elimina todas las acciones del historial.
//   - `mostrarHistorial()`: Muestra en la consola todas las acciones en el historial.
// ### Ejemplo de Esquema en JSON
// A continuación se muestra un esquema JSON representativo del historial con objetos de cada tipo de acción:
// ```json
// {
//   "acciones": [
//     {
//       "id": 1,
//       "descripcion": "Usuario inició sesión",
//       "fecha": "2024-08-31T12:00:00Z",
//       "dispositivo_origen": "PC de Escritorio"
//     },
//     {
//       "id": 2,
//       "descripcion": "Usuario actualizó su perfil",
//       "fecha": "2024-08-31T12:05:00Z",
//       "cambios": [
//         {
//           "id_cambio": 1,
//           "valor_anterior": "correo@viejo.com",
//           "nuevo_valor": "correo@nuevo.com"
//         },
//         {
//           "id_cambio": 2,
//           "valor_anterior": "1234",
//           "nuevo_valor": "5678"
//         }
//       ]
//     },
//     {
//       "id": 3,
//       "descripcion": "Usuario cerró sesión",
//       "fecha": "2024-08-31T12:30:00Z",
//       "dispositivo_origen": "PC de Escritorio",
//       "tiempo_de_sesion": 30
//     },
//     {
//       "id": 4,
//       "descripcion": "Usuario realizó una compra",
//       "fecha": "2024-08-31T12:45:00Z",
//       "productos": ["Laptop", "Ratón"],
//       "total": 1500
//     },
//     {
//       "id": 5,
//       "descripcion": "Usuario envió un mensaje",
//       "fecha": "2024-08-31T13:00:00Z",
//       "destinatario": "admin@example.com",
//       "mensaje": "Hola, necesito ayuda con mi cuenta."
//     }
//   ]
// }
// ```
var Accion = /** @class */ (function () {
    function Accion(id, descripcion, fecha) {
        this.id = id;
        this.descripcion = descripcion;
        this.fecha = fecha;
    }
    Accion.prototype.mostrarDetalle = function () {
        console.log("ID: ".concat(this.id));
        console.log("Descripci\u00F3n: ".concat(this.descripcion));
        console.log("Fecha: ".concat(this.fecha));
    };
    return Accion;
}());
var AccionInicioSesion = /** @class */ (function (_super) {
    __extends(AccionInicioSesion, _super);
    function AccionInicioSesion(id, descripcion, fecha, dispositivo_origen) {
        var _this = _super.call(this, id, descripcion, fecha) || this;
        _this.dispositivo_origen = dispositivo_origen;
        return _this;
    }
    AccionInicioSesion.prototype.mostrarDetalle = function () {
        _super.prototype.mostrarDetalle.call(this);
        console.log("Dispositivo de origen: ".concat(this.dispositivo_origen));
    };
    return AccionInicioSesion;
}(Accion));
var AccionCierreSesion = /** @class */ (function (_super) {
    __extends(AccionCierreSesion, _super);
    function AccionCierreSesion(id, descripcion, fecha, dispositivo_origen, tiempo_de_sesion) {
        var _this = _super.call(this, id, descripcion, fecha) || this;
        _this.dispositivo_origen = dispositivo_origen;
        _this.tiempo_de_sesion = tiempo_de_sesion;
        return _this;
    }
    AccionCierreSesion.prototype.mostrarDetalle = function () {
        _super.prototype.mostrarDetalle.call(this);
        console.log("Dispositivo de origen: ".concat(this.dispositivo_origen));
        console.log("Tiempo de sesi\u00F3n: ".concat(this.tiempo_de_sesion, " minutos"));
    };
    return AccionCierreSesion;
}(Accion));
var Cambio = /** @class */ (function () {
    function Cambio(id_cambio, valor_anterior, nuevo_valor) {
        this.id_cambio = id_cambio;
        this.valor_anterior = valor_anterior;
        this.nuevo_valor = nuevo_valor;
    }
    Cambio.prototype.mostrarCambio = function () {
        console.log("Cambio ".concat(this.id_cambio, ":"));
        console.log("Valor anterior: ".concat(this.valor_anterior));
        console.log("Nuevo valor: ".concat(this.nuevo_valor));
    };
    return Cambio;
}());
var AccionActualizacionPerfil = /** @class */ (function (_super) {
    __extends(AccionActualizacionPerfil, _super);
    function AccionActualizacionPerfil(id, descripcion, fecha, cambios) {
        var _this = _super.call(this, id, descripcion, fecha) || this;
        _this.cambios = cambios;
        return _this;
    }
    AccionActualizacionPerfil.prototype.mostrarDetalle = function () {
        _super.prototype.mostrarDetalle.call(this);
        console.log("Cambios realizados:");
        this.cambios.forEach(function (cambio) {
            cambio.mostrarCambio();
        });
    };
    return AccionActualizacionPerfil;
}(Accion));
var AccionCompra = /** @class */ (function (_super) {
    __extends(AccionCompra, _super);
    function AccionCompra(id, descripcion, fecha, productos, total) {
        var _this = _super.call(this, id, descripcion, fecha) || this;
        _this.productos = productos;
        _this.total = total;
        return _this;
    }
    AccionCompra.prototype.mostrarDetalle = function () {
        _super.prototype.mostrarDetalle.call(this);
        console.log("Productos comprados: ".concat(this.productos));
        console.log("Total: $".concat(this.total));
    };
    return AccionCompra;
}(Accion));
var AccionEnvioMensaje = /** @class */ (function (_super) {
    __extends(AccionEnvioMensaje, _super);
    function AccionEnvioMensaje(id, descripcion, fecha, destinatario, mensaje) {
        var _this = _super.call(this, id, descripcion, fecha) || this;
        _this.destinatario = destinatario;
        _this.mensaje = mensaje;
        return _this;
    }
    AccionEnvioMensaje.prototype.mostrarDetalle = function () {
        _super.prototype.mostrarDetalle.call(this);
        console.log("Destinatario: ".concat(this.destinatario));
        console.log("Mensaje: ".concat(this.mensaje));
    };
    return AccionEnvioMensaje;
}(Accion));
var Historial = /** @class */ (function () {
    function Historial() {
        this.acciones = [];
    }
    Historial.prototype.agregarAccion = function (accion) {
        accion.id = this.acciones.length + 1;
        this.acciones.push(accion);
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
    Historial.prototype.eliminarAccionPorId = function (id_eliminado) {
        var index = this.acciones.findIndex(function (accion) { return accion.id == id_eliminado; });
        if (index === -1) {
            console.log('No se encontró ninguna accion con ese ID');
            return false;
        }
        this.acciones.splice(index, 1);
        console.log('Accion eliminada correctamente');
        return true;
    };
    Historial.prototype.eliminarTodo = function () {
        this.acciones = [];
        console.log('Historial eliminado correctamente');
    };
    Historial.prototype.mostrarHistorial = function () {
        this.acciones.forEach(function (accion) {
            accion.mostrarDetalle();
        });
    };
    return Historial;
}());
// Ejemplo de uso
var historial = new Historial();
// Crear instancias de diferentes tipos de acciones
var inicioSesion = new AccionInicioSesion(1, 'Usuario inició sesión', new Date(), 'PC de Escritorio');
var cambios = [
    new Cambio(1, 'correo@viejo.com', 'correo@nuevo.com'),
    new Cambio(2, '1234', '5678')
];
var actualizacionPerfil = new AccionActualizacionPerfil(2, 'Usuario actualizó su perfil', new Date(), cambios);
var cierreSesion = new AccionCierreSesion(3, 'Usuario cerró sesión', new Date(), 'PC de Escritorio', 30);
var compra = new AccionCompra(4, 'Usuario realizó una compra', new Date(), ['Laptop', 'Ratón'], 1500);
var envioMensaje = new AccionEnvioMensaje(5, 'Usuario envió un mensaje', new Date(), 'admin@example.com', 'Hola, necesito ayuda con mi cuenta.');
// Agregar acciones al historial
historial.agregarAccion(inicioSesion);
historial.agregarAccion(actualizacionPerfil);
historial.agregarAccion(cierreSesion);
historial.agregarAccion(compra);
historial.agregarAccion(envioMensaje);
// Mostrar el historial completo
historial.mostrarHistorial();
// Eliminar una acción específica
historial.eliminarAccionPorId(3);
// Mostrar el historial actualizado
console.log('\nHistorial después de eliminar una acción:');
historial.mostrarHistorial();
// Eliminar todo el historial
historial.eliminarTodo();
// Verificar que el historial está vacío
console.log('\nHistorial después de eliminar todo:');
historial.mostrarHistorial();
