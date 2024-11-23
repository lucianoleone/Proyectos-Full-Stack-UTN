let numero_usuario=prompt("Ingrese su edad")

while (isNaN(numero_usuario)||numero_usuario ===''){
    alert("Ingresa un valor numerico")
    numero_usuario=prompt("Ingrese su edad")
}
if (Number(numero_usuario)<18){
    alert("No puede pasar")
}else if (Number(numero_usuario)>=18){
    alert("Puede pasar")
}