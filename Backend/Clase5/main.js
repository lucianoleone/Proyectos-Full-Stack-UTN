// class Vehiculo {
//     marca : string = 'desconocido' // esto es al pedo
//     modelo : string = 'desconocido' //tipado de las propiedades
//     anio_fabricacion : number = 0
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
//     precio : number = 0
//     velocidad : number = 0
//     constructor(
//         marca: string, 
//         modelo: string, 
//         precio: number, 
//         velocidad: number){
//         this.marca = marca
//         this.modelo = modelo
//         this.precio = precio
//         this.velocidad = velocidad 
//     }
// }
// class Bicicleta extends Vehiculo {
//     cantidad_ruedas : number = 2
//     tipo_freno :  string
//     constructor(
//         marca: string, 
//         precio: number, 
//         modelo: string, 
//         km_por_hora: number, 
//         anios_antiguedad: number,
//         tipo_freno: string
//     ){
//         super(marca, precio, modelo, km_por_hora, anios_antiguedad )
//         this.tipo_freno = tipo_freno
//     }
// }
// const vehiculo1 = new vehiculo('Peugeot', '206', 20000, 100)
// console.log(vehiculo1)
//crear clase para hacer empleado
/*
nombre
sueldo
fecha_contratacion
id_empleado
puesto

metodo
presentarse(){} es un metodo que genera un texto con la presentacion del empleado
*/
var Empleado1 = /** @class */ (function () {
    function Empleado1(nombre, sueldo, fecha_contratacion, id_empleado, puesto) {
        this.empresa = 'Schneider';
        this.nombre = nombre;
        this.sueldo = sueldo;
        this.fecha_contratacion = fecha_contratacion;
        this.id_empleado = id_empleado;
        this.puesto = puesto;
        this.antiguedad = new Date().getFullYear() - this.fecha_contratacion;
    }
    Empleado1.prototype.presentarse = function () {
        console.log("Hola me llamo ".concat(this.nombre, ", tengo un sueldo de $ ").concat(this.sueldo, " y trabajo en ").concat(this.empresa, " hace ").concat(this.antiguedad, " a\u00F1os"));
    };
    return Empleado1;
}());
// const Luciano = new Empleado('Luciano', 20000, 2022, 1)
// Luciano.presentarse()
var Pasante1 = /** @class */ (function (_super) {
    __extends(Pasante1, _super);
    function Pasante1(nombre, sueldo, fecha_contratacion, id_empleado, puesto, meses_pasantia) {
        var _this = _super.call(this, nombre, sueldo, fecha_contratacion, id_empleado, puesto) || this;
        _this.meses_pasantia = meses_pasantia;
        return _this;
    }
    Pasante1.prototype.hacerCosasDePasante = function () {
        if (this.puesto == 'Desarrollador') {
            console.log('Git push a produccion');
        }
        else {
            console.log('Pasante intenta usar la impresora');
        }
    };
    return Pasante1;
}(Empleado1));
var Luciano = new Pasante1('Luciano', 20000, 2022, 1, 'Desarrollador', 6);
Luciano.presentarse();
Luciano.hacerCosasDePasante();
