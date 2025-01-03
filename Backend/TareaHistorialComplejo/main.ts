
// ### Consigna: Crear y Gestionar un Historial Usando Programación Orientada a Objetos en TypeScript

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
class Accion {
    id: number;
    descripcion: string;
    fecha: Date;
        constructor(
            id: number, 
            descripcion: string, 
            fecha: Date) {
        this.id = id;
        this.descripcion = descripcion;
        this.fecha = fecha;
    
    }
    mostrarDetalle() : void {
        console.log(`ID: ${this.id}`);
        console.log(`Descripción: ${this.descripcion}`);
        console.log(`Fecha: ${this.fecha}`);
    }
}

class AccionInicioSesion extends Accion {
    dispositivo_origen: string;
    constructor(
        id: number, 
        descripcion: string, 
        fecha: Date, 
        dispositivo_origen: string) {
        super(id, descripcion, fecha);
        this.dispositivo_origen = dispositivo_origen;
    }
    mostrarDetalle(): void {
        super.mostrarDetalle();
        console.log(`Dispositivo de origen: ${this.dispositivo_origen}`);
    }
}

class AccionCierreSesion extends Accion {
    dispositivo_origen: string;
    tiempo_de_sesion: number;
    constructor(
        id: number, 
        descripcion: string, 
        fecha: Date, 
        dispositivo_origen: string, 
        tiempo_de_sesion: number) {
        super(id, descripcion, fecha);
        this.dispositivo_origen = dispositivo_origen;
        this.tiempo_de_sesion = tiempo_de_sesion;
    }
    mostrarDetalle(): void {
        super.mostrarDetalle();
        console.log(`Dispositivo de origen: ${this.dispositivo_origen}`);
        console.log(`Tiempo de sesión: ${this.tiempo_de_sesion} minutos`);
    }
}
class Cambio {
    id_cambio: number;
    valor_anterior: string;
    nuevo_valor: string;
    constructor(
        id_cambio: number, 
        valor_anterior: string, 
        nuevo_valor: string) {
        this.id_cambio = id_cambio;
        this.valor_anterior = valor_anterior;
        this.nuevo_valor = nuevo_valor;
    }
    mostrarCambio(): void {
        console.log(`Cambio ${this.id_cambio}:`);
        console.log(`Valor anterior: ${this.valor_anterior}`);
        console.log(`Nuevo valor: ${this.nuevo_valor}`);
    }
}
class AccionActualizacionPerfil extends Accion {
    cambios: Cambio[];
    constructor(
        id: number, 
        descripcion: string, 
        fecha: Date, 
        cambios: Cambio[]) {
        super(id, descripcion, fecha);
        this.cambios = cambios;
    }
    mostrarDetalle(): void {
        super.mostrarDetalle();
        console.log("Cambios realizados:");
        this.cambios.forEach(cambio => {
            cambio.mostrarCambio();
        });
    }
}
class AccionCompra extends Accion {
    productos: string[];
    total: number;
    constructor(
        id: number, 
        descripcion: string, 
        fecha: Date, 
        productos: string[], 
        total: number) {
        super(id, descripcion, fecha);
        this.productos = productos;
        this.total = total;
    }
    mostrarDetalle(): void {
        super.mostrarDetalle();
        console.log(`Productos comprados: ${this.productos}`);
        console.log(`Total: $${this.total}`);
    }
}

class AccionEnvioMensaje extends Accion {
    destinatario: string;
    mensaje: string;
    constructor(
        id: number, 
        descripcion: string, 
        fecha: Date, 
        destinatario: string, 
        mensaje: string) {
        super(id, descripcion, fecha);
        this.destinatario = destinatario;    
        this.mensaje = mensaje;
    }
    mostrarDetalle(): void {
        super.mostrarDetalle(); 
        console.log(`Destinatario: ${this.destinatario}`);
        console.log(`Mensaje: ${this.mensaje}`);
    }
}

class Historial {
    acciones: Accion[];
    constructor() {
        this.acciones = [];
    }
    agregarAccion(accion: Accion) {
        accion.id = this.acciones.length + 1;
        this.acciones.push(accion);
    }
    encontrarAccionPorId(id_encontrado: number) {
        var index = this.acciones.findIndex(function (accion) { return accion.id == id_encontrado; });
        if (index === -1) {
            console.log('No se encontró ninguna accion con ese ID');
            return false;
        }
        var accion_encontrada = this.acciones[index];
        return accion_encontrada;
    }
    eliminarAccionPorId(id_eliminado: number) {
        var index = this.acciones.findIndex(function (accion) { return accion.id == id_eliminado; });
        if (index === -1) {
            console.log('No se encontró ninguna accion con ese ID');
            return false;
        }
        this.acciones.splice(index, 1);
        console.log('Accion eliminada correctamente');
        return true;

    }
    eliminarTodo(): void {
        this.acciones = [];
        console.log('Historial eliminado correctamente');
    }
    mostrarHistorial(): void {
        this.acciones.forEach(accion => {
            accion.mostrarDetalle();
        });
    }
}

// Ejemplo de uso
const historial = new Historial();

// Crear instancias de diferentes tipos de acciones
const inicioSesion = new AccionInicioSesion(
    1,
    'Usuario inició sesión',
    new Date(),
    'PC de Escritorio'
);

const cambios = [
    new Cambio(1, 'correo@viejo.com', 'correo@nuevo.com'),
    new Cambio(2, '1234', '5678')
];

const actualizacionPerfil = new AccionActualizacionPerfil(
    2,
    'Usuario actualizó su perfil',
    new Date(),
    cambios
);

const cierreSesion = new AccionCierreSesion(
    3,
    'Usuario cerró sesión',
    new Date(),
    'PC de Escritorio',
    30
);

const compra = new AccionCompra(
    4,
    'Usuario realizó una compra',
    new Date(),
    ['Laptop', 'Ratón'],
    1500
);

const envioMensaje = new AccionEnvioMensaje(
    5,
    'Usuario envió un mensaje',
    new Date(),
    'admin@example.com',
    'Hola, necesito ayuda con mi cuenta.'
);

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