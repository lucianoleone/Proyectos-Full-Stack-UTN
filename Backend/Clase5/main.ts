// class Vehiculo {
//     marca : string = 'desconocido' // esto es al pedo
//     modelo : string = 'desconocido' //tipado de las propiedades
//     anio_fabricacion : number = 0

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
type Puesto = 'Desarrollador' | 'Tester'| 'Diseñador'| 'Administrativo'| 'RH'


class Empleado1 {
    nombre : string
    sueldo : number
    fecha_contratacion : number
    id_empleado : number
    empresa : string = 'Schneider'
    antiguedad : number
    puesto : Puesto
    constructor (
        nombre : string, 
        sueldo : number, 
        fecha_contratacion : number, 
        id_empleado : number,
        puesto : Puesto
    ){

        this.nombre = nombre
        this.sueldo = sueldo
        this.fecha_contratacion = fecha_contratacion
        this.id_empleado = id_empleado
        this.puesto = puesto
        this.antiguedad =  new Date().getFullYear() - this.fecha_contratacion
    }
    presentarse () : void {
        console.log(`Hola me llamo ${this.nombre}, tengo un sueldo de $ ${this.sueldo} y trabajo en ${this.empresa} hace ${this.antiguedad} años`)
    }
}

// const Luciano = new Empleado('Luciano', 20000, 2022, 1)

// Luciano.presentarse()

class Pasante1 extends Empleado1 {
    meses_pasantia : number
    constructor (
        nombre : string, 
        sueldo : number,
        fecha_contratacion : number,
        id_empleado : number,
        puesto : Puesto,
        meses_pasantia : number){
        super (nombre, sueldo, fecha_contratacion, id_empleado, puesto)
        this.meses_pasantia = meses_pasantia
    }
    hacerCosasDePasante () : void {
    
        if(this.puesto == 'Desarrollador'){
            console.log('Git push a produccion')
    }
    else {
        console.log('Pasante intenta usar la impresora')
    }
    }

}

const Luciano = new Empleado1('Luciano',750000, 2022, 1, ''  

Luciano.presentarse()
Luciano.hacerCosasDePasante()

