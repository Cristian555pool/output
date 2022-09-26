//Desafío: Segunda Pre Entrega / eliminamos todos los prompt
//Idea a tienda online de casa de guitarras
//Definiremos los datos necesarios para comenzar

//Creando la estructura de los objetos
class Guitars{
    constructor (id, modelo, anio, precio, color, imagen){
        this.id = id;
        this.modelo = modelo;
        this.anio = anio;
        this.precio = precio;
        this.color = color;
        this.imagen = imagen;
    };
    verificarDatos (){
        console.log (`El id es ${this.id}. El modelo es ${this.modelo}, el año es ${this.anio} y su precio es $${this.precio}, color: ${this.color}`)
    };
  };
  //Construímos - función constructora Array
  const guitarra1 = new Guitars (1, "Fender Telecaster", 1951, 231700, "Blanco", "Multimedia/fender-telecaster-blanca.webp");
  const guitarra2 = new Guitars (2,"Fender Stratocaster", 1954, 431000, "Negro", "Multimedia/D_NQ_NP_2X_722920-MLA47694800899_092021-F.webp");
  const guitarra3 = new Guitars (3,"Gibson Les Paul", 1952, 3299000, "Blanco", "Multimedia/D_NQ_NP_2X_939758-MLA50724326100_072022-F.webp");
  const guitarra4 = new Guitars (4, "Gibson ES335", 1958, 5800000, "Blanco", "Multimedia/D_NQ_NP_976516-MLA49008372137_022022-O.webp");
  const guitarra5 = new Guitars (5, "Gibson Flying V", 1958, 3000000, "Negro", "Multimedia/D_NQ_NP_2X_819557-MLA44928054370_022021-F.webp");
  const guitarra6 = new Guitars (6, "Gibson Explorer", 1958, 3200000, "Negro", "Multimedia/D_NQ_NP_2X_997723-MLA48678524788_122021-F.webp");
  const guitarra7 = new Guitars (7, "Gibson SG", 1961, 1800000, "Blanco", "Multimedia/D_NQ_NP_2X_771269-MLA47683019700_092021-F.webp");
  const guitarra8 = new Guitars (8, "B. C. Rich Warlock", 1980, 700000, "Negro", "Multimedia/D_NQ_NP_2X_754736-MLA47778224525_102021-F.webp");
  const guitarra9 = new Guitars (9, "Ibanez RG Standard", 2005, 200000, "Blanco", "Multimedia/D_NQ_NP_2X_716817-MLA48052064633_102021-F.webp");


//const conjuntoGuitarras = [guitarra1, guitarra2, guitarra3, guitarra4, guitarra5, guitarra6, guitarra7, guitarra8, guitarra9]
//Creamos los nuevos Array
let conjuntoGuitarras = []
let productosEnCarrito = []

//Elementos DOM 
let botonCarrito = document.getElementById("botonCarrito")
let modalBody = document.getElementById("modal-body")
let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")
let parrafoCompra = document.getElementById('precioTotal')
let acumulador
let divProductos = document.getElementById("productos")
divProductos.setAttribute("class", "productosEstilos")

//Capturamos btn mostrar catalogo y pasamos eventos con function correspondiente
let mostrarCatalogoBtn = document.getElementById("verCatalogo")
mostrarCatalogoBtn.addEventListener("click", mostrarCatalogo)

//Capturamos btn ocultar catalogo y pasamos eventos con function correspondiente
let ocultarCatalogoBtn = document.getElementById("ocultarCatalogo")
ocultarCatalogoBtn.onclick = ocultarCatalogo

//Capturo guardarGuitarbtn boton y asignamos evento
const guardarGuitarBtn = document.getElementById("guardarGuitarBtn")
guardarGuitarBtn.addEventListener("click", guardarNuevaguitar)

//Evento botonCarrito
botonCarrito.addEventListener('click', () => {
    cargarProductosCarrito(productosEnCarrito)
})
//▼Eventos ▲Eventos ►Eventos◄

//Inicio del array vacío
if(localStorage.getItem("conjuntoGuitarras")){

    conjuntoGuitarras = JSON.parse(localStorage.getItem("conjuntoGuitarras"))
    console.log(conjuntoGuitarras)
}else{
    console.log(`primera vez que carga array conjuntoGuitarras`)
    conjuntoGuitarras.push(guitarra1, guitarra2, guitarra3, guitarra4, guitarra5, guitarra6, guitarra7, guitarra8, guitarra9)
    localStorage.setItem("conjuntoGuitarras", JSON.stringify(conjuntoGuitarras))
}
console.log(conjuntoGuitarras)
//Inicio del array carrito
if(localStorage.getItem("carrito")){
    productosEnCarrito = JSON.parse(localStorage.getItem("carrito"))
}else{
    console.log(`primera vez`)
    localStorage.setItem("carrito", [])
} 

//PLANTILLA DOM
function mostrarCatalogo(){
    divProductos.innerHTML= ""
    conjuntoGuitarras.forEach((guitarra)=>{
        let nuevoProducto = document.createElement("div")
        nuevoProducto.innerHTML =  `<article id="${guitarra.id}" class="card container-fluid" style="width: 28rem;">
                                    <img src="${guitarra.imagen}" alt="${guitarra.modelo}>
                                    <article class="card-body">
                                    <h3 class="card-title">${guitarra.modelo}</h3>
                                    <p class="">Color: ${guitarra.color}</p>
                                    <p class="card-text">Año: ${guitarra.anio}</p>
                                    <p class="">Precio: ${guitarra.precio}</p>
                                    <button id="agregarBtn${guitarra.id}" class="btn btn-primary click">Agregar al carrito</button>
                                    </article>` 
        divProductos.appendChild(nuevoProducto)

        let btnAgregar = document.getElementById(`agregarBtn${guitarra.id}`)
        console.log(btnAgregar);
        btnAgregar.addEventListener("click", () =>{agregarAlCarrito(guitarra)})
        })

    }

function agregarAlCarrito(guitarra){
    console.log(`su Guitarra ${guitarra.modelo} color ${guitarra.color} ha sido agregado. N° id: ${guitarra.id}`)
    productosEnCarrito.push(guitarra)
    console.log(productosEnCarrito);
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
    //Seteo al storage
}
function ocultarCatalogo(){
divProductos.innerHTML =""
}

//Inputs  
function guardarNuevaguitar(){
    let modeloInput = document.getElementById("modeloInput")
    let anioInput = document.getElementById("anioInput")    
    let precioInput = document.getElementById("precioInput")    
    let colorInput = document.getElementById("colorInput")
    let guitarraCreada = new Guitars(conjuntoGuitarras.length+1, modeloInput.value, anioInput.value, precioInput.value, colorInput.value, "Multimedia/electric-guitar-png.webp")
    console.log(guitarraCreada)
    conjuntoGuitarras.push(guitarraCreada)
    localStorage.setItem("conjuntoGuitarras", JSON.stringify(conjuntoGuitarras))
    //Seteo al storage conjuntoGuitarras
    //CLAVE: "conjuntoGuitarras"
}

function cargarProductosCarrito(productosDelStorage) {

    modalBody.innerHTML = " "  
    productosDelStorage.forEach((productoCarrito) => {
        
        modalBody.innerHTML += `
            <div class="card border-primary mb-3" id ="productoCarrito${productoCarrito.id}" style="max-width: 540px;">
                <img class="card-img-top" src="${productoCarrito.imagen}" alt="${productoCarrito.modelo}">
                <div class="card-body">
                        <h4 class="card-title">${productoCarrito.modelo}</h4>
                        <p class="card-text">$${productoCarrito.precio}</p> 
                        <button class= "btn btn-danger" id="botonEliminar"><i class="fas fa-trash-alt"></i></button>
                </div>    
            </div>
    `
})
//Declaro función para calcular total
compraTotal(productosDelStorage)
}

function compraTotal(productosTotal) {
    acumulador = 0;
    productosTotal.forEach((productoCarrito)=>{
        acumulador += productoCarrito.precio 
    })
    console.log(acumulador)
//Se declara if para acumulador = 0 o !=
    if(acumulador == 0){
        parrafoCompra.innerHTML = `<p>No hay productos en el carrito</p>`
    }else{
        parrafoCompra.innerHTML = `Importe de su compra ${acumulador}`
    }
}

//Session Storage | Aplico DarkMode
let btnDarkMode = document.getElementById("botonDarkMode")
let btnLightMode = document.getElementById("botonLightMode")

let darkMode
console.log(localStorage.getItem("darkMode"))
if(localStorage.getItem("darkMode")){
    darkMode = localStorage.getItem("darkMode")
}else{
    console.log("entra primera vez")
    localStorage.setItem("darkMode", "light")
} 

if(darkMode == "dark"){
    document.body.classList.add("darkMode")
}

btnDarkMode.addEventListener("click", ()=>{
    document.body.classList.add("darkMode")
    localStorage.setItem("darkMode", "dark")

})
btnLightMode.addEventListener("click", ()=>{
    document.body.classList.remove("darkMode")
    localStorage.setItem("darkMode", "light")
})

let eliminarModo = document.getElementById("eliminarMode")
eliminarModo.addEventListener("click", ()=>{
    localStorage.removeItem("darkMode")
})
//Fin declaraciones