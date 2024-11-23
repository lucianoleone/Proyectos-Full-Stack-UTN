const numero_secreto=3

numero_usuario=prompt("Adivine el numero secreto del 1 al 10")

while (numero_usuario!=numero_secreto){
    if (isNaN(numero_usuario)||numero_usuario ===''){
        alert("Ingresa un valor numerico")
        numero_usuario=prompt("Adivine el numero secreto del 1 al 10")
    }else if  (Number(numero_usuario)<1 || Number(numero_usuario)>10 ){
        alert("Ingresaste un numero fuera del rango")
        numero_usuario=prompt("Adivine el numero secreto del 1 al 10")
    }else if (numero_usuario > numero_secreto){
        alert("Te pasaste!")
        numero_usuario=prompt("Adivine el numero secreto del 1 al 10")
    }else if (numero_usuario < numero_secreto){
        alert("Te falta un poquito!")
        numero_usuario=prompt("Adivine el numero secreto del 1 al 10")
    }
}
alert("Adivinaste!!!")  
