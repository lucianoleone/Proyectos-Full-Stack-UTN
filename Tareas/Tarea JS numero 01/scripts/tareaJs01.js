let N1=prompt("Ingresa el primer numero a sumar")
while(N1===''|| String(Number(N1))=='NaN'){
    alert("Ingresa un valor numerico")
    N1=prompt("Ingresa el primer numero a sumar")
    }
let N2=prompt("Ingresa el segundo numero a sumar")
while(N1===''|| String(Number(N2))=='NaN') {
    alert("Ingresa un valor numerico")
    N2=prompt("Ingresa el segundo numero a sumar")
    }
let N3=Number(N1)+Number(N2)
alert(`La suma de ${N1} y ${N2} es ${N3}`)
