// const usuario = {
//     nombre: 'Pepe',
//     apellido: 'Perez',
//     edad: 20
// }
// function Usuario(nombre,edad=null){
//     this.nombre = nombre
//     this.edad = edad
// }
// Usuario.prototype.decirEdad = function(){
//     console.log(`El usuario ${this.nombre} tiene ${this.edad} años`)

// }
// const usuario1 = new Usuario('Pepe',25)
// usuario1.decirEdad()
// console.log(usuario1)

// class Usuario {
//     constructor(nombre,edad=null){
//         this.nombre = nombre
//         this.edad = edad
//     }
//     decirEdad(){
//         console.log(`El usuario ${this.nombre} tiene ${this.edad} años`)
// }    
// }

// const usuario1 = new Usuario('Pepe',25)
// const usuario2 = new Usuario('Juan',18)
// usuario1.decirEdad()
// usuario2.decirEdad()
/* 
EJERCICIO:
Empleado
    -nombre: string
    -puesto: string
    -sueldo: number
    -area: string
    -presentarse: funcion(){Decir por consola 'Hola me llamo {nombre}, trabajo como {puesto} en el area de {area} y gano ${sueldo}}
    -obtenerSueldoNeto: funcion(){Debe devolver el sueldo menos el 18% (aportes)}
Crear 3 empleados y por consola verificar que funcionen los metodos
*/
class Empleado {
    constructor(nombre, puesto, sueldo, area) {
        this.nombre = nombre
        this.puesto = puesto
        this.sueldo = sueldo
        this.area = area
    }
    presentarse() {
        console.log(`Hola me llamo ${this.nombre}, trabajo como ${this.puesto} en el area de ${this.area} y gano $ ${this.sueldo}`)
    }
    obtnerSueldoNeto() {
        let sueldoNeto = this.sueldo * 0.82
        return sueldoNeto
    }
}

const empleado1 = new Empleado('Analia', 'Desarrollador', 10000, 'Desarrollo')
const empleado2 = new Empleado('Juan', 'Administrativo', 1000, 'Compras')
const empleado3 = new Empleado('German', 'Vendedor', 23000, 'Ventas')
empleado1.presentarse()
empleado2.presentarse()
empleado3.presentarse()
console.log(`El sueldo neto de ${empleado1.nombre} es: $ ${empleado1.obtnerSueldoNeto()}`) 
console.log(`El sueldo neto de ${empleado2.nombre} es: $ ${empleado2.obtnerSueldoNeto()}`) 
console.log(`El sueldo neto de ${empleado3.nombre} es: $ ${empleado3.obtnerSueldoNeto()}`)