class Producto {
// molde , matriz//
    constructor(id,nombre,precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

const producto1 = new Producto(001, "Ian K" , 16500);
const producto2 = new Producto(002, "Forajido" , 16500);
const producto3 = new Producto(003, "Temuco" , 16500);
const producto4 = new Producto(004, "Tinto" , 16500);
const producto5 = new Producto(005, "Darder" , 16500);
const producto6 = new Producto(006, "Jaloma" , 16500);
const producto7 = new Producto(007, "Cardinal" , 16500);
const producto8 = new Producto(008, "Ramble Tamble" , 16500);
const producto9 = new Producto(009, "Verano" , 16500);
const producto10 = new Producto(010, "Elsie D" , 16500);
const producto11 = new Producto(011, "Ennis" , 16500);
const producto12 = new Producto(012, "Jamie" , 16500);


const BaseDeDatos =[producto1,producto2,producto3,producto4,producto5, producto6,producto7,producto8,producto9,producto10,producto11,producto12];
console.log(BaseDeDatos);


BaseDeDatos.forEach((el)=>{
    console.log(el.id)
    console.log(el.nombre)
    console.log(el.precio)
})

let carrito = [];
















// let productos = ["sombrero1" , "sombrero2" , "sombrero3" , "sombrero4" , "sombrero5"]

// for(let i=0;i<productos.length;i++){
    
//     console.log(productos[i]);
// }






// function mostrarProductos(){
//     const tipo = prompt("¿Le gustaria un sombrero vaquero, nativo, o clasico?");
//     const color = mostrarColores(tipo);
//     console.log(color);
//     const precio = mostrarPrecio(color);
//     console.log(precio);
// }

// mostrarProductos();

// function mostrarColores(tipo){
// if(tipo == "vaquero"){
//     let color = prompt("En ese modelo tenemos azul y rojo, cual prefiere?");
//     return color;
// }else if(tipo == "nativo"){
//     let color = prompt("En ese modelo tenemos negro y bordo");
//     return color;
// }else if(tipo == "clasico"){
//     let color = prompt("En ese modelo tenemos negro y marron");
//     return color;
// }
// }

// function mostrarPrecio(color){
// if(color == "azul"){
//     let precio = 16.700;
//     return precio;
// }else if(color == "rojo"){
//     let precio = 16.300;
//     return precio;
// }else if(color == "bordo"){
//     let precio = 17.200;
//     return precio;
// }else if((color == "nativo" && color == "clasico" && color == "negro") && (color == "negro")){ 
//     let precio = 18.200;
//     return precio;
// }else if(color == "marron"){
//     let precio = 17.500;
//     return precio;
// }
// }







































