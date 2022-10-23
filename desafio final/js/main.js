//Desafío: Entrega trabajo final
//tienda online / casa de guitarras

//▼Elementos DOM 
let botonCarrito = document.getElementById("botonCarrito")
let modalBody = document.getElementById("modal-body")
let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")
let parrafoCompra = document.getElementById('precioTotal')
let acumulador
let divProductos = document.getElementById("productos")
divProductos.setAttribute("class", "productosEstilos")
let inputBuscar = document.getElementById("buscador") 
let btnBuscar = document.getElementById("btnBuscar")

//▼Evento botonCarrito
botonCarrito.addEventListener('click', () => {
    cargarProductosCarrito(productosEnCarrito)
})

//▼Se aplica Operador OR
let productosEnCarrito = JSON.parse(localStorage.getItem("carrito")) || []

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
                                    <p class="precioCard">Precio: ${guitarra.precio}</p>
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
        let guitarraAgregada = productosEnCarrito.find((elem) => (elem.id == guitarra.id))
        console.log(guitarraAgregada)
        console.log(productosEnCarrito);
        if (guitarraAgregada == undefined){
        productosEnCarrito.push(guitarra)
        console.log(productosEnCarrito);
        localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
        //▲Seteo al storage
        Swal.fire({
            title: "Ha agregado el producto",
            text: `La guitarra ${guitarra.modelo} en color ${guitarra.Color} ha sido agregada`,
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
            confirmButtonText:"Entendido",
        })
    }else{
        console.log(`La guitarra seleccionada ${guitarra.modelo} ya se encuentra en el carrito`)
        Swal.fire({
            title: "Producto ya agregado",
            text: `La guitarra ${guitarra.modelo} en color ${guitarra.color} ya se encuentra en el carrito`,
            icon: "info",
            timer:4000,
            confirmButtonText:"Aceptar",
            confirmButtonColor: 'green',
        })
    }
}

//▼Inputs  
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
                        <button class= "btn btn-danger" id="botonEliminar${productoCarrito.id}"><i class="fas fa-trash-alt"></i></button>
                </div>    
            </div>
    `
})
productosDelStorage.forEach((productoCarrito, indice)=>{
    //▼Capturar el boton sin usar variable y adjuntamos evento
        document.getElementById(`botonEliminar${productoCarrito.id}`).addEventListener('click', () => {
            //▼Cartel emergente:
            Toastify({
                text: `${productoCarrito.modelo} ha sido eliminado`,
                duration: 2500,
                gravity: "bottom",
                position: "left",
                style:{
                    background: "#006FCD",
                    color: "white", 
                }
                
                }).showToast();
            console.log(`Producto ${productoCarrito.modelo} eliminado`)
            //▼Eliminamos del DOM
            let cardProducto = document.getElementById(`productoCarrito${productoCarrito.id}`)
            console.log(cardProducto);
            cardProducto.remove()
    
            //▼Eliminamos del array compras
            productosEnCarrito.splice(indice, 1)
            console.log(productosEnCarrito)
            localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
            cargarProductosCarrito(productosEnCarrito)
        })  
    })
//▼Declaro función para calcular total ||▼Se aplica Spread ...
compraTotal(...productosDelStorage)
}

function compraTotal(...productosTotal) {
    acumulador = 0;
    acumulador = productosTotal.reduce((acumulador, productoCarrito)=>{
        return acumulador + productoCarrito.precio 
    },0)
    console.log(acumulador)

//▼Se declara if para acumulador = 0 o != ||▼Se aplica Operador Ternario ? : 
acumulador > 0 ? parrafoCompra.innerHTML = `El importe de su compra es ${acumulador}`: parrafoCompra.innerHTML = `<p>El carrito está vacío</p>`
}

function finalizarCompra(){
    Swal.fire({
        title: 'Está seguro de realizar la compra?',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Sí, seguro',
        cancelButtonText: 'No, no quiero',
        confirmButtonColor: 'green',
        cancelButtonColor: 'red',
    }).then((result) => {
        let DateTime = luxon.DateTime
        const dt = DateTime.now()
        let fecha = `Siendo las ${dt.toLocaleString(DateTime.TIME_SIMPLE)} del ${dt.toLocaleString(DateTime.DATE_FULL)}`
    if (result.isConfirmed) {
        Swal.fire({
            title: 'Compra realizada',
            icon: 'success',
            confirmButtonColor: '#006FCD',
            text: `Muchas gracias por su compra`,
            footer: `<p>${fecha} usted recibirá un mail con las indicaciones para coordinar la entrega</p>`
        })
        //▲▼Ejecutar .then en caso de que result sea confirmado. 
        productosEnCarrito = []
        localStorage.removeItem('carrito')
        console.log(`El total de su compra es ${acumulador}`)
        //▼Se carga el modal con el array vacío
        cargarProductosCarrito(productosEnCarrito)
        }
        else{
            Swal.fire({
                title: 'Lo sentimos! La compra no fue realizada',
                icon: 'info',
                text: `La compra continúa pendiente`,
                confirmButtonColor: '#006FCD',
                timer:3500
            })
        }
    })}

//▼Eventos 
botonCarrito.addEventListener('click', () => {
    cargarProductosCarrito(productosEnCarrito)
})
botonFinalizarCompra.addEventListener('click',()=>{
    finalizarCompra()
})
btnBuscar.addEventListener('click', ()=>{
    //▼function de buscado
    //event.preventDefault()
    console.log("click");
    console.log(inputBuscar.value.toLowerCase());
    let modeloBuscado = conjuntoGuitarras.filter(guitarra =>(guitarra.modelo.toLowerCase() == inputBuscar.value.toLowerCase()))
    console.log(modeloBuscado);
    if(modeloBuscado.length == 0){
        console.log(`No hay coincidencia`);
        mostrarCatalogo(conjuntoGuitarras)
    }else{
        mostrarCatalogo(modeloBuscado)

    }
})
//Código
let divLoader = document.getElementById("loader")

const loading = setTimeout(()=>{
    divLoader.remove()
    mostrarCatalogo(conjuntoGuitarras)
},2500)


//▼Session Storage | ▼Aplico DarkMode
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
//▲Fin declaraciones 





















/*
    verificarDatos (){
        console.log (`El id es ${this.id}. El modelo es ${this.modelo}, el año es ${this.anio} y su precio es $${this.precio}, color: ${this.color}`)
    };
*/

//Construímos - función constructora
/*
const guitarra1 = new Guitars (1, "Fender Telecaster", 1951, 231700, "Blanco", "Multimedia/fender-telecaster-blanca.webp");
const guitarra2 = new Guitars (2,"Fender Stratocaster", 1954, 431000, "Negro", "Multimedia/D_NQ_NP_2X_722920-MLA47694800899_092021-F.webp");
const guitarra3 = new Guitars (3,"Gibson Les Paul", 1952, 3299000, "Blanco", "Multimedia/D_NQ_NP_2X_939758-MLA50724326100_072022-F.webp");
const guitarra4 = new Guitars (4, "Gibson ES335", 1958, 5800000, "Blanco", "Multimedia/D_NQ_NP_976516-MLA49008372137_022022-O.webp");
const guitarra5 = new Guitars (5, "Gibson Flying V", 1958, 3000000, "Negro", "Multimedia/D_NQ_NP_2X_819557-MLA44928054370_022021-F.webp");
const guitarra6 = new Guitars (6, "Gibson Explorer", 1958, 3200000, "Negro", "Multimedia/D_NQ_NP_2X_997723-MLA48678524788_122021-F.webp");
const guitarra7 = new Guitars (7, "Gibson SG", 1961, 1800000, "Blanco", "Multimedia/D_NQ_NP_2X_771269-MLA47683019700_092021-F.webp");
const guitarra8 = new Guitars (8, "B. C. Rich Warlock", 1980, 700000, "Negro", "Multimedia/D_NQ_NP_2X_754736-MLA47778224525_102021-F.webp");
const guitarra9 = new Guitars (9, "Ibanez RG Standard", 2005, 200000, "Blanco", "Multimedia/D_NQ_NP_2X_716817-MLA48052064633_102021-F.webp");

*/



//▼Capturamos btn mostrar catalogo y pasamos eventos con function correspondiente
//let mostrarCatalogoBtn = document.getElementById("verCatalogo")
//mostrarCatalogoBtn.addEventListener("click", mostrarCatalogo)

//▼Capturamos btn ocultar catalogo y pasamos eventos con function correspondiente
//let ocultarCatalogoBtn = document.getElementById("ocultarCatalogo")
//ocultarCatalogoBtn.onclick = ocultarCatalogo

//▼Capturo guardarGuitarbtn y asignamos evento
//const guardarGuitarBtn = document.getElementById("guardarGuitarBtn")
//guardarGuitarBtn.addEventListener("click", guardarNuevaguitar)


//▼Eventos ▲Eventos ►Eventos◄

//▼Inicio del array vacío
/*
if(localStorage.getItem("conjuntoGuitarras")){

    conjuntoGuitarras = JSON.parse(localStorage.getItem("conjuntoGuitarras"))
    console.log(conjuntoGuitarras)
}else{
    console.log(`primera vez que carga array conjuntoGuitarras`)
    conjuntoGuitarras.push(guitarra1, guitarra2, guitarra3, guitarra4, guitarra5, guitarra6, guitarra7, guitarra8, guitarra9)
    localStorage.setItem("conjuntoGuitarras", JSON.stringify(conjuntoGuitarras))
}
*/



//▼Desestructurar Array 

/*
let [a, ,b , c] = conjuntoGuitarras
a = "id: 1, modelo: Fender Telecaster, 1951, 231700, Blanco"
console.log(a) 
*/
//►imprime en consola el valor asignado en la línea anterior y reemplaza el original
//►id 2 se declara vacío


//console.log(b) //►imprime en consola {id: 3, modelo: "Gibson Les Paul", anio: 1952, precio: 3299000, color: 'blanco', …}
//console.log(c) //►imprime en consola {id: 4, modelo: 'Gibson ES335', anio: 1958, precio: 5800000, color: 'blanco', …}
//console.log(conjuntoGuitarras) //►imprime en consola array ok
//console.log(...conjuntoGuitarras) //►imprime en consola array ok
//▼Buscar por modelo ||▼Se aplica Operador Nullish
//let modeloBuscado = conjuntoGuitarras.find(guitarra => guitarra.modelo == "Gibson SG") ?? "No tenemos esa guitarra en stock"
//console.log(modeloBuscado) //►imprime según modelo buscado en consola {id: 7, modelo: 'Gibson SG', anio: 1961, precio: 1800000, color: 'blanco', …}



//▼Desestructurar un objeto ||▼Se aplica Operador AND - OR
/*
const {modelo, precio} = guitarra1
const {modelo: modelo1, precio: precio1} = guitarra1
let ComparaPrecio = precio
if(ComparaPrecio == precio1){
    console.log(`Estas guitarras valen lo mismo: ${precio}`)
}else{
    console.log(`Estas guitarras no valen lo mismo: ${modelo} vale ${precio} y ${modelo1} vale ${precio1}`)
}
ComparaPrecio > 10000 && console.log("Su producto es mayor a diez mil")
console.log(ComparaPrecio || "El valor es 0 o no existe")
*/

/*function finalizarCompra(){
    //Estamos finalizando la compra, por lo que debemos borrar todos los elementos del array y removerlo del localStorage
    productosEnCarrito = []
    localStorage.removeItem('carrito')
    //Mostramos total
    console.log(`El total de su compra es ${acumulador}`)
    //Volvemos a cargar el modal con el array vacío por lo que quedará sin nada
    cargarProductosCarrito(productosEnCarrito)
}*/


//▼DETALLES APLICADOS se modificaron las líneas no considerar▼
//►En línea 73 Desestructurar Array 
//►En línea 82 Se aplica Operador Nullish
//►En línea 86 Se aplica Operador OR
//►En línea 89 a 99 Desestructurar un objeto |►Se aplica Operador AND - OR
//►En línea 162 Se aplica Spread ...
//►En línea 173 Se aplica Operador Ternario ? : 

//▼DETALLES APLICADOS▼