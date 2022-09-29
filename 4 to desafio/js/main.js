//Desafío: Incorporar Array y lo visto hasta ahora.
//Idea a tienda online de casa de guitarras
//Definiremos los datos necesarios para comenzar

//Inicio del programa

//Creando la estructura de los objetos
class Guitars{
    constructor (id, modelo, anio, precio, color){
        this.id = id;
        this.modelo = modelo;
        this.anio = anio;
        this.precio = precio;
        this.color = color;
    };
    verificarDatos (){
        console.log (`El id es ${this.id}. El modelo es ${this.modelo}, el año es ${this.anio} y su precio es $${this.precio}, color: ${this.color}`)
    };
  };
  //Construímos - función constructora Array
  const guitarra1 = new Guitars (1, "Fender Telecaster", 1951, 231700, "Blanco");
  const guitarra2 = new Guitars (2,"Fender Stratocaster", 1954, 431000, "Negro");
  const guitarra3 = new Guitars (3,"Gibson Les Paul", 1952, 3299000, "Blanco");
  const guitarra4 = new Guitars (4, "Gibson ES335", 1958, 5800000, "Blanco");
  const guitarra5 = new Guitars (5, "Gibson Flying V", 1958, 3000000, "Negro");
  const guitarra6 = new Guitars (6, "Gibson Explorer", 1958, 3200000, "Negro");
  const guitarra7 = new Guitars (7, "Gibson SG", 1961, 1800000, "Blanco");
  const guitarra8 = new Guitars (8, "B. C. Rich Warlock", 1980, 700000, "Negro");
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
        console.log("Disculpa, no encontramos coincidencia o la guitarra que buscas aún no esta en nuestro catalogo")
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
        const CARRITO = [];

        function eleccionGuitar() {
    
            let eleccion = prompt(`
                Para comprar. Por favor elija el numero de Id de la guitarra segun corresponda:
                1. Nombre: ${conjuntoGuitarras[0].modelo}
                Precio: ${conjuntoGuitarras[0].precio}
                2. Nombre: ${conjuntoGuitarras[1].modelo},
                Precio: $${conjuntoGuitarras[1].precio}
                3. Nombre: ${conjuntoGuitarras[2].modelo},
                Precio: $${conjuntoGuitarras[2].precio}
                4. Nombre: ${conjuntoGuitarras[3].modelo},
                Precio: $${conjuntoGuitarras[3].precio}
                5. Nombre: ${conjuntoGuitarras[4].modelo},
                Precio: $${conjuntoGuitarras[4].precio}
                6. Nombre: ${conjuntoGuitarras[5].modelo}
                Precio: ${conjuntoGuitarras[5].precio}
                7. Nombre: ${conjuntoGuitarras[6].modelo},
                Precio: $${conjuntoGuitarras[6].precio}
                8. Nombre: ${conjuntoGuitarras[7].modelo},
                Precio: $${conjuntoGuitarras[7].precio}
                9. Nombre: ${conjuntoGuitarras[8].modelo},
                Precio: $${conjuntoGuitarras[8].precio}
                10. Nombre: ${conjuntoGuitarras[9].modelo},
                Precio: $${conjuntoGuitarras[9].precio}
                11. Nombre: ${conjuntoGuitarras[10].modelo}
                Precio: ${conjuntoGuitarras[10].precio}
                12. Nombre: ${conjuntoGuitarras[11].modelo},
                Precio: ${conjuntoGuitarras[11].precio}
            `)
    
            // Aqui sera llamada la funcion 
            informeTotalDeLaCompra(eleccion);
        }

        eleccionGuitar();
    
        function informeTotalDeLaCompra(caso) {
    
            let seguirComprando = ""
    
            switch (caso) {
                case "1":
                        seguirComprando = prompt("Queres seguir comprando ?? si/no").toLowerCase();
    
                    if (seguirComprando === "si") {
                        eleccionGuitar()
                    } else {
                        console.log("Gracias por tu compra");
                    }
                    break;
                case '2':
                    //mensaje = `El total de la compra es: $${conjuntoGuitarras[1].precio}`;
    
                    seguirComprando = prompt("Queres seguirComprando ? si/no").toLowerCase();
                    if (seguirComprando == "si") {
    
                        eleccionGuitar();
                    } else {
    
                        console.log('Gracias por tu compra')//${mensaje}
                       
                    }
                    break;
                case '3':
                    //mensaje = `El total de la compra es: $${conjuntoGuitarras[2].precio}`;
    
                    seguirComprando = prompt("Queres seguirComprando ? si/no").toLowerCase();
                    if (seguirComprando == "si") {
    
                        eleccionGuitar();
                    } else {
    
                        console.log('Gracias por tu compra')//${mensaje}
    
                    }
                    break;
                case '4':
                    //mensaje = `El total de la compra es: $${conjuntoGuitarras[2].precio}`;
                    seguirComprando = prompt("Queres seguirComprando ? si/no").toLowerCase();
                    if (seguirComprando == "si") {
    
                        eleccionGuitar();
                    } else {
    
                        imprimir('Gracias por tu compra') // ${mensaje}
    
                    }
    
                    break;
                case '5':
                    //mensaje = `El total de la compra es: $${conjuntoGuitarras[2].precio}`;
    
                    seguirComprando = prompt("Queres seguirComprando ? si/no").toLowerCase();
                    if (seguirComprando == "si") {
    
                        eleccionGuitar();
                    } else {
    
                        imprimir('Gracias por tu compra') //${mensaje}
    
                    }
                    break; // RETORNAR PRECIO
                case '6':
                    //mensaje = `El total de la compra es: $${conjuntoGuitarras[2].precio}`;
    
                    seguirComprando = prompt("Queres seguirComprando ? si/no").toLowerCase();
                    if (seguirComprando == "si") {
    
                        eleccionGuitar();
                    } else {
    
                        imprimir('Gracias por tu compra') //${mensaje}
    
                    }
                    break; // RETORNAR PRECIO
                case '7':
                    //mensaje = `El total de la compra es: $${conjuntoGuitarras[2].precio}`;
    
                    seguirComprando = prompt("Queres seguirComprando ? si/no").toLowerCase();
                    if (seguirComprando == "si") {
    
                        eleccionGuitar();
                    } else {
    
                        imprimir('Gracias por tu compra') //${mensaje}
    
                    }
                    break; // RETORNAR PRECIO
                case '8':
                    //mensaje = `El total de la compra es: $${conjuntoGuitarras[2].precio}`;
    
                    seguirComprando = prompt("Queres seguirComprando ? si/no").toLowerCase();
                    if (seguirComprando == "si") {
    
                        eleccionGuitar();
                    } else {
    
                        imprimir('Gracias por tu compra') //${mensaje}
    
                    }
                    break; // RETORNAR PRECIO
                case '9':
                    //mensaje = `El total de la compra es: $${conjuntoGuitarras[2].precio}`;
    
                    seguirComprando = prompt("Queres seguirComprando ? si/no").toLowerCase();
                    if (seguirComprando == "si") {
    
                        eleccionGuitar();
                    } else {
    
                        imprimir('Gracias por tu compra') //${mensaje}
    
                    }
                    break; // RETORNAR PRECIO
                case '10':
                    //mensaje = `El total de la compra es: $${conjuntoGuitarras[2].precio}`;
    
                    seguirComprando = prompt("Queres seguirComprando ? si/no").toLowerCase();
                    if (seguirComprando == "si") {
    
                        eleccionGuitar();
                    } else {
    
                        imprimir('Gracias por tu compra') //${mensaje}
    
                    }
                    break; // RETORNAR PRECIO
                    default:
                        alert("Por favor ingrese un numero valido");
                        informeTotalDeLaCompra(caso);
                        break;
                }
            }
    
            conjuntoGuitarras.forEach((producto)=>{
                console.log(`${producto.modelo} - $${producto.precio}`)
            })        
            
            console.log(`El total de compra es: $${totalDeLaCompra()}`)
            
        function totalDeLaCompra(){
       
            let total = conjuntoGuitarras.reduce((total, Guitars)=> total + Guitars.precio, 0);
            return total;
        }
} 

else{
    //►Si elige "Cancelar" podrá ver las opciones para trabajar detalladamente y luego imprimir en consola 
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