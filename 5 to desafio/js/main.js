//Desafío: Incorporar Array y lo visto hasta ahora.
//Idea a tienda online de casa de guitarras
//Definiremos los datos necesarios para comenzar

//Inicio del programa

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
  const conjuntoGuitarras = [guitarra1, guitarra2, guitarra3, guitarra4, guitarra5, guitarra6, guitarra7, guitarra8]

//Declaramos function que permita al Usuario agregar una guitarra
function nuevaGuitarra(){
    let modeloIngresado = prompt("Ingrese el modelo de guitarra");
    let anioIngresado = parseInt(prompt("Ingrese el año de la guitarra"));
    let precioIngresado = parseInt(prompt("Ingrese el precio"));
    let colorIngresado = prompt("Ingrese el color: Blanco/Negro");
    let guitarraCreada = new Guitars (conjuntoGuitarras.length+1, modeloIngresado, anioIngresado, precioIngresado, colorIngresado)
    console.log(guitarraCreada)
    conjuntoGuitarras.push(guitarraCreada)
  }
  
  //Declaramos funcción para mostrar catálogo con "for of" para usuario
  function verCatalogo(){
    alert(`Podrá ver el catálogo en consola:`)
    for(let guitarra of conjuntoGuitarras){
        guitarra.verificarDatos()
    }
  }
  

//Declaramos función para eliminar una guitarra del catálogo
function eliminarGuitarra(){
    let idEliminar = prompt("Ingrese el ID de la guitarra a eliminar")
    for(let buscarGuitarra of conjuntoGuitarras){
        if (buscarGuitarra.id == idEliminar){
            console.log(" Este es el producto eliminado " + buscarGuitarra.modelo)
            conjuntoGuitarras.splice(idEliminar-1, 1)
            console.log(conjuntoGuitarras)
     }
 }
}


//Declaramos función aplicando Find para que busque por modelo (opción4)
function buscarGuitar(){
        let buscado = prompt("Ingrese Modelo de la guitarra que desea buscar")
        let busqueda = conjuntoGuitarras.find((unidad)=>unidad.modelo.toLowerCase() == buscado.toLowerCase())
        if(busqueda == undefined){
            console.log("Disculpa, no encontramos coincidencia o la guitarra aún no está disponible")
        }else{
            console.log(`Tenemos la guitarra ${busqueda.modelo} en color ${busqueda.color}, y su valor es $${busqueda.precio}`)
        }        
}

//Delcaramos función para buscar y ordenar por precio, sort (opción5)
function ordenadorDePrecio(){
    let opciones = prompt(`Ingrese MAYOR para ordenar de mayor a menor.
    Ingrese MENOR para ordenar de menor a mayor.
    `)
    if(opciones.toUpperCase() == "MAYOR"){
        console.log(conjuntoGuitarras.sort((menor,mayor)=> (mayor.precio - menor.precio)))
    }else if(opciones.toUpperCase() == "MENOR"){
        console.log(conjuntoGuitarras.sort((menor,mayor)=> (menor.precio - mayor.precio)))
    }
}


//▼Declaramos función para filtrar por color, aplicando filter (opción6)
function buscarColor(){
    let colorBuscado = prompt("Ingrese el color del la guitarra")
    let busquedaPorColor = conjuntoGuitarras.filter((unidad)=>unidad.color.toLowerCase() == colorBuscado.toLowerCase())
    if((busquedaPorColor !== "blanco") || (busquedaPorColor !== "negro")){
        console.log(busquedaPorColor)
    }else{
        console.log("Disculpa, no encontramos coincidencia o el color que buscas aún no esta en nuestro catalogo")
    }     
}


//Mensaje de bienvenida
//Almaceno el nombre del usuario 
let nombreUsuario = prompt('Bienvenido! Por favor ingrese su nombre.').toLowerCase();

//Imprimo en consola el nombre para darle la bienvenida y para identificar a quién vamos a mostrar su catálogo  
console.log (`Detalle de las guitarras seleccionadas por : ${nombreUsuario}`);

//Function que consulte al usuario opción deseada
const bienvenido = confirm(`${nombreUsuario}, por favor seleccione "Aceptar" si usted es Cliente para ver catálogo. O "Cancelar" si usted es Usuario, para elegir una de las opciones preestablecidas`);


if(bienvenido){
    //Si da Aceptar ingresa como Cliente podrá ver el catálogo en consola/ver los objetos
    alert(`Podrá ver el catálogo en consola:`)
    for (let i = 0; i < conjuntoGuitarras.length; i++){
        console.log(conjuntoGuitarras[i])
    }
        const carrito = [];

        let productosOfrecidos = "Para comprar. Por favor elija el numero de Id de la guitarra segun corresponda"
        //Muestra via prompt mensaje con productos     
        
        function agregarCarrito(){
            //recorremos arrayProductos y por cada elemento que tenga sumamos el item a nuestro mensaje
   
            for (item of conjuntoGuitarras){
                productosOfrecidos += `\n ${item.id} - ${item.modelo} a $ ${item.precio}, color ${item.color}`
            }
            productosOfrecidos += `\n Ingrese el número de Item que desea agregar al carrito. Para finalizar ingrese 99`       
            let accionUsuario = parseInt(prompt(productosOfrecidos))
        
            while (isNaN(accionUsuario)) {
                alert("Por favor, ingrese sólo números")
                accionUsuario = parseInt(prompt(productosOfrecidos))
            }
        
            while (accionUsuario != 99) {
        
                switch (accionUsuario) {
        
                    case 0:
                        carrito.push(conjuntoGuitarras[0])
                        alert(`Agregamos al carrito el producto ${conjuntoGuitarras[0].modelo}`)
                        break;
                    case 1:
                        carrito.push(conjuntoGuitarras[1])
                        alert(`Agregamos al carrito el producto ${conjuntoGuitarras[1].modelo}`)
                        break;
                    case 2:
                        carrito.push(conjuntoGuitarras[2])
                        alert(`Agregamos al carrito el producto ${conjuntoGuitarras[2].modelo}`)
                        break;
                    case 3:
                        carrito.push(conjuntoGuitarras[3])
                        alert(`Agregamos al carrito el producto ${conjuntoGuitarras[3].modelo}`)
                        break;
                    case 4:
                        carrito.push(conjuntoGuitarras[4])
                        alert(`Agregamos al carrito el producto ${conjuntoGuitarras[4].modelo}`)
                        break;
                    case 5:
                        carrito.push(conjuntoGuitarras[5])
                        alert(`Agregamos al carrito el producto ${conjuntoGuitarras[5].modelo}`)
                        break;  
                    case 6:
                        carrito.push(conjuntoGuitarras[6])
                        alert(`Agregamos al carrito el producto ${conjuntoGuitarras[6].modelo}`)
                        break;
                    case 7:
                        carrito.push(conjuntoGuitarras[7])
                        alert(`Agregamos al carrito el producto ${conjuntoGuitarras[7].modelo}`)
                        break;
                    case 8:
                        carrito.push(conjuntoGuitarras[8])
                        alert(`Agregamos al carrito el producto ${conjuntoGuitarras[8].modelo}`)
                        break;
                    
                    default:
                        console.log("No tenemos el id elegido :( ")
                        break;
                }
        
                accionUsuario = parseInt(prompt(productosOfrecidos))
            }
        
            //una vez que sale del while por haber recibido un 99, llamamos a la function mostrarCarrito()
            console.log("Cerramos tu pedido")
            mostrarCarrito()
        
        }    
        
        //Mostramos total a llevar
        let productosCarrito = "Vas a llevar:"
        let precioCarrito = 0;
        
        function mostrarCarrito() {
            for (itemsElegidos of carrito) {
                productosCarrito += `\n - ${itemsElegidos.modelo}`
                precioCarrito += itemsElegidos.precio
            }
        
            alert(`Repasemos: \n ${productosCarrito} \n por un total de $${precioCarrito}`)
        }
        agregarCarrito()


} else{
    //Si elige "Cancelar" podrá ver las opciones para trabajar detalladamente y luego imprimir en consola 
    function usuarioSelecciona(){
    let seleccionar = parseInt(prompt(`Ingrese el número de la opción que desea realizar:
            1. Ver catálogo
            2. Agregar una guitarra a nuestro catálogo 
            3. Eliminar una guitarra de nuestro catálogo 
            4. Encontrar por modelo:
            5. Ordenar catálogo por precios:
            6. Filtrar por color:
            0. Para salir
            `))
    menu(seleccionar)
    }
    //Generamos la función del menú seleccionado
    function menu(opcionSeleccionada){
            switch(opcionSeleccionada){
                case 0:
                    salir = true
                    alert(`Nos vemos la proxima!`)
                break    
                case 1:
                    verCatalogo()
                break 
                case 2: 
                    nuevaGuitarra()
                break 
                case 3: 
                    eliminarGuitarra()
                break
                case 4: 
                    buscarGuitar()
                break
                case 5: 
                    ordenadorDePrecio()
                break 
                case 6:
                    buscarColor()
                break
                default: 
                alert(`La ocpión ingresada no existe. Por favor ingrese una opción correcta`)
                break
            }
        }
    let salir 
    while(salir != true){
        usuarioSelecciona()
    }
}

//FIN DECLARACIONES

//PLANTILLA DOM
let divProductos = document.getElementById("productos")
divProductos.setAttribute("class", "productosEstilos")

conjuntoGuitarras.forEach((guitarra)=>{
    let nuevoProducto = document.createElement("div")
    nuevoProducto.innerHTML =  `<article id="${guitarra.id}" class="card container-fluid" style="width: 28rem;">
                                <img src="${guitarra.imagen}" alt="${guitarra.modelo}>
                                <article class="card-body">
                                    <h3 class="card-title">${guitarra.modelo}</h3>
                                    <p class="">Color: ${guitarra.color}</p>
                                    <p class="card-text">Año: ${guitarra.anio}</p>
                                    <p class="">Precio: ${guitarra.precio}</p>
                                    <a href="" class="btn btn-primary click">Agregar al carrito</a>
                                </article>` 
    divProductos.appendChild(nuevoProducto)
})  