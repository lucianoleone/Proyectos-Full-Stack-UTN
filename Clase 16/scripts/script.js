/*
let producto = {
    'titulo' : 'mesa',
    'precio' : 100 ,
    'id' : 2409 ,
    'stock' : 100 ,
    "vendedor" : {
        'nombre' : 'Javier',
        'apellido' : 'Ferandez'
    }

}
console.log(producto['vendedor']['nombre'])
*/


function crearProducto(titulo,precio,categoria){
    let producto = {
        'titulo' : titulo,
        'precio' : precio ,
        'categoria' : categoria ,
        'stock' :  0,
        'estado' : false
    }
    
    return producto
}

let producto1 = crearProducto('mesa',100,'hogar')
//console.log(producto1)

function mostrarProducto(producto){
    
    let HTML=`
    <div>
    <h3>${producto.titulo}</h3>
    <span><b>Precio:</b>$ ${producto.precio}</span>
    <span><b>Categoria:</b>${producto.categoria}</span>
</div>
`
document.write(HTML)
}

mostrarProducto(producto1)
