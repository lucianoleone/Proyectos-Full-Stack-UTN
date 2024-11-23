let productos = [
    {
        titulo: 'Coca Cola',
        precio: 1000,
        descripcion: 'bebida energetica',
        stock: 10,
        id: 1
    },
    {
        titulo: 'Sprite',
        precio: 1200,
        descripcion: 'bebida energetica sabor limon',
        stock: 5,
        id: 2
    },
    {
        titulo: 'Fanta',
        precio: 1400,
        descripcion: 'bebida energetica sabor naranja',
        stock: 7,
        id: 3
    },
    {
        titulo: 'Pepsi',
        precio: 900,
        descripcion: 'bebida energetica',
        stock: 4,
        id: 4
    }
]
/*
function obtenerProductoId(id){
    for (let producto of productos){
        if(producto.id == id){
    }

    function obtenerProductosMayoresA1100 () {
        //Esta es la lista donde guardo aquellos productos que cumplan con la condicion
        let array_resultante = []
        for(let producto of productos){
            if(producto.precio > 1100){
                array_resultante.push(producto)
            }
        }
        return array_resultante
    }
    
    let productosCaros = obtenerProductosMayoresA1100()
    console.log(productosCaros)
    */
//Crear una funcion que me permita dado un id, obtener la posicion del elemento en el array. SI no lo encuentra debe devolver -1
//obtenerPosicionDelProductoPorId(2) //retorna 1
//obtenerPosicionDelProductoPorId(20) //retornar -1
//Recomendacion: Ver que bucle conviene usar
    function obtenerProductoId(id) {
        for (let i=1; i < productos.length; i++) {
            if (producto.id == id) {
                return i 
            }
        }
        return -1
    }

    function hayAlgunProductoXTitulo(titulo) {
        for (let producto of productos) {
            if (producto.titulo == titulo) {
                return true
            }
        }
        return false
    }
    