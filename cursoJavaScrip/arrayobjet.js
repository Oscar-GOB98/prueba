var articulos = [
    {nombre: "bici", costo: 3000},
    {nombre: "tv", costo: 2500},
    {nombre: "libro", costo: 320},
    {nombre: "celular", costo: 10000},
    {nombre: "laptop", costo: 20000},
    {nombre: "teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700}
];

/*var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
});*/

/*var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});*/

/*var encontrarArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
});*/

/*articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});*/

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

/*var articulosBaratos = articulos.some(function(articulo){
    if(articulo.costo <= 100){
        console.log( "Si hay productos en stock");
    }else{
        console.log("no hay productos en stock");
    }
    
});*/