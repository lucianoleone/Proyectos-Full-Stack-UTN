/*

Ejercicio 1:
Solicitar al usuario un texto y verificar si se trata de una URL con certificado ssl,
Si cuenta con con https:// decir por consola "la url ingresada, cuenta con certificado ssl"
Si no lo tiene pero si tiene http:// "la url ingresada no cuenta con certificado ssl"
Si no posee ninguno decir "no has ingresado una url valida"
*/
//Resolución:
/*
function url() {
    let url = prompt("ingrese una url");
    let url2 = url.split("://");
    let url3 = url2[0];
    if (url3 == "https") {
        console.log("la url ingresada, cuenta con certificado ssl");    
    } else if (url3 == "http") {
        console.log("la url ingresada no cuenta con certificado ssl");
    } else {
        console.log("no has ingresado una url valida");
    }
}
url()
*/



/*
Ejercicio 2:
Dado los siguientes textos 
"hola%20como%20estas,%20todo%bien?" 
"no%20me%20siento%20bien"
"que%20mal"

descifrar el codigo y mostrarlo por consola: "El codigo descifrado es: " + codigoDescifrado
Averiguar la cantidad de caracteres y en base a el numero de caracteres mostrar

"el mensaje es corto" entre 1 y 8 caracteres
"el mensaje es mediano" entre 9 y 18
"el mensaje es largo"  mas de 18

Ademas si el mensaje cuenta con ",", "@", "-" debera decir, "el mensaje es complejo", sino decir
"el mensaje no es complejo"
*/

//Resolución:
/*
let texto1 = 'hola%20como%20estas,%20todo%20bien?'
let texto2 = 'no%20me%20siento%20bien'
let texto3 = 'que%20mal'
    


function decodificar(texto) {
    texto = texto.replaceAll('%20', ' ')
    let complejo
    let largo

    if(texto.length <= 8){
        largo= 'el mensaje es corto'
    } else if(texto.length <= 18){
        largo='el mensaje es mediano'
    } else if(texto.length > 18){
        largo='el mensaje es largo'
    }
    
    if(texto.includes(',')){
        complejo = 'el mensaje es complejo'
    } else {
        complejo='el mensaje no es complejo'
    }
    codigoDescifrado = {
        'texto': texto, 
        'largo': largo, 
        'complejo': complejo
    }

    return codigoDescifrado

    }

console.log(decodificar(texto1).texto)
console.log(decodificar(texto1).largo)
console.log(decodificar(texto1).complejo)
console.log(decodificar(texto2).texto)
console.log(decodificar(texto2).largo)
console.log(decodificar(texto2).complejo)
console.log(decodificar(texto3).texto)
console.log(decodificar(texto3).largo)
console.log(decodificar(texto3).complejo)
*/


/*
Ejercicio 3:
solicitar al usuario un mensaje, y cifrarlo con %20 en los espacios. Una vez cifrado decifrarlo
con el algoritmo anterior. 
*/

//Resolución

/*
let mensaje = prompt('ingrese un mensaje')
console.log(mensaje)
function cifrar(texto) {
    texto = texto.replaceAll(' ', '%20')    
    return texto
}

function decodificar(texto) {
    texto = texto.replaceAll('%20', ' ')
    return texto
}
let mensajeCifrado = cifrar(mensaje)
console.log(mensajeCifrado)
console.log(decodificar(mensajeCifrado))
*/


/*
Ejercicio 4:
4.
Solicitar al usuario una palabra y decir en consola "tiene mayuscula" en el caso de que tenga
una maysucula, sino decir "tiene minuscula"

a) Dado una cadena de texto, imprimir "La cadena es mayor a 10 caracteres" si la longitud de la cadena es mayor a 10, de lo contrario imprimir "La cadena es menor o igual a 10 caracteres".
b) Dada una cadena de texto, imprimir "La cadena contiene la letra 'a'" si la cadena contiene la letra 'a', de lo contrario imprimir "La cadena no contiene la letra 'a'".
c) Dada una cadena de texto, reemplazar todas las apariciones de la letra 'a' con la letra 'x' y imprimir la nueva cadena.
d) Dada una cadena de texto, imprimir "La cadena es un número" si la cadena es un número válido, de lo contrario imprimir "La cadena no es un número".
e) Dada una cadena de texto, imprimir "La cadena es una dirección de correo electrónico válida" si la cadena es una dirección de correo electrónico válida, de lo contrario imprimir "La cadena no es una dirección de correo electrónico válida".
*/
//Resolución:

/*
let palabraUsuario = prompt('ingrese una palabra')
function tieneMayuscula(texto) {
    let minuscula = 0
    let mayuscula = 0

    for (let i = 0; i < texto.length; i++) {
        if(65 <= texto.charCodeAt(i) && texto.charCodeAt(i) <= 122) {
            if (texto[i] === texto[i].toUpperCase()) {
                console.log(texto[i]==texto[i].toUpperCase())
                mayuscula = mayuscula + 1
            } else if (texto[i] === texto[i].toLowerCase()) {
                minuscula = minuscula + 1
            }
        }
    }    
    if (mayuscula > 0) {
        console.log("tiene " + mayuscula + " mayusculas")
    } 
    if (minuscula > 0) {
        console.log("tiene " + minuscula + " minusculas")
    }
    if (mayuscula == 0 && minuscula == 0) {
        console.log("no tiene mayusculas ni minusculas")
    }
    
}

tieneMayuscula(palabraUsuario)
*/

// consigna a: Dado una cadena de texto, imprimir "La cadena es mayor a 10 caracteres" si la longitud de la cadena es mayor a 10, de lo contrario imprimir "La cadena es menor o igual a 10 caracteres".

//Resolución:
/*
const palabra = prompt('ingrese una palabra')

function longitud(texto) {
    if (texto.length > 10) {
        console.log('La cadena es mayor a 10 caracteres')
    } else {
        console.log('La cadena es menor o igual a 10 caracteres')
    }
}
longitud(palabra)
*/

//b: Dada una cadena de texto, imprimir "La cadena contiene la letra 'a'" si la cadena contiene la letra 'a', de lo contrario imprimir "La cadena no contiene la letra 'a'".

//Resolución:
/*
const mensaje = prompt('ingrese una frase')

function contieneA(texto) {
    if (texto.includes('a')) {
        console.log('La cadena contiene la letra "a"')
    } else {
        console.log('La cadena no contiene la letra "a"')
    }
    
}
contieneA(mensaje)
*/

//c: Dada una cadena de texto, reemplazar todas las apariciones de la letra 'a' con la letra 'x' y imprimir la nueva cadena.

//Resolución:
/*
const mensaje = prompt('ingrese un mensaje')

function reemplazarAporX (texto) {
    texto = texto.replaceAll('a', 'x')
    return texto
}

console.log(reemplazarAporX(mensaje))
*/


//d: Dada una cadena de texto, imprimir "La cadena es un número" si la cadena es un número será, de lo contrario imprimir "La cadena no es un número".

//Resolución:
/*
const numeroIngresado = prompt('ingrese un numero')

function esNumero(numero) {
    if (isNaN(numero)) {
        console.log('La cadena no es un número')
    } else {
        console.log('La cadena es un número')
    }
}

esNumero(numeroIngresado)
*/

//e: Dada una cadena de texto, imprimir "La cadena es una dirección de correo electrónico válida" si la cadena es una dirección de correo electrónico válida, de lo contrario imprimir "La cadena no es una dirección de correo electrónico válida".

//Resolución:
/*
const correoIngresado = prompt('ingrese un correo')

function esCorreo(correo) {
    let respuesta = ''
    if (correo.includes('@')) {
        
        const direccion = correo.split('@')
        
        if (direccion[1].includes('.')) {
            respuesta = `La cadena ${correo} es una dirección de correo electrónico válida`
        } else {
            respuesta = `La cadena ${correo} no es una dirección de correo electrónico válida`
        }
    } else {
        respuesta = `La cadena ${correo} no es una dirección de correo electrónico válida`
    }
    return respuesta
}

console.log(esCorreo(correoIngresado))

*/