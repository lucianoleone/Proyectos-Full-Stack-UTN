console.log('Hello world')
let numero_1 : number = 1
let numero_2 : number = 2
let resultado : number = numero_1 + numero_2
console.log(resultado)

const saludar = (nombre : string) : void =>{
    console.log('Hola '+ nombre + '!!!')
}

const obtenerSaludo = (nombre :string) : string=> {
    return  ('Hola '+ nombre + '!!!')
}
console.log(obtenerSaludo('pepe'))

interface Persona {
    nombre : string
    apellido : string
    edad : number
}

const persona1 : Persona = {
    nombre : 'pepe',
    apellido : 'pepe',
    edad : 20
}

const persona2 : Persona = {    
    nombre : 'juan',
    apellido : 'perez',
    edad : 18
}

const saludarPersona = (persona : Persona) : void => {
    console.log('Holanda '+ persona.apellido + '!!!')
}

saludarPersona(persona1)

const persona4 : [string, number, Function] = ['pep', 20, () => {}]

const persona5 : Persona[] = [persona1, persona2]