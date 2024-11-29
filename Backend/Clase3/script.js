console.log('Hello world');
var numero_1 = 1;
var numero_2 = 2;
var resultado = numero_1 + numero_2;
console.log(resultado);
var saludar = function (nombre) {
    console.log('Hola ' + nombre + '!!!');
};
var obtenerSaludo = function (nombre) {
    return ('Hola ' + nombre + '!!!');
};
console.log(obtenerSaludo('pepe'));
var persona1 = {
    nombre: 'pepe',
    apellido: 'pepe',
    edad: 20
};
var persona2 = {
    nombre: 'juan',
    apellido: 'perez',
    edad: 18
};
var saludarPersona = function (persona) {
    console.log('Holanda ' + persona.apellido + '!!!');
};
saludarPersona(persona1);
