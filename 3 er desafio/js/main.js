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
  const guitarra3 = new Guitars (3,"Gibson Les Paul ", 1952, 3299000, "Blanco");
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
            console.log("Este es el producto" + buscarGuitarra.modelo)
            conjuntoGuitarras.splice(idEliminar-1, 1)
            console.log(conjuntoGuitarras)
        }
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
    } else{
        //►Si elige Usuario, es decir "Cancelar" podrá ver las opciones para trabajar y luego imprimir en consola 
        function usuarioSelecciona(){
        let seleccionar = parseInt(prompt(`Ingrese el número de la opción que desea realizar:
                1. Ver catálogo
                2. Agregar un producto a nuestro catálogo 
                3. Eliminar un producto a nuestro catálogo 
                0. Para salir
                `))
        menu(seleccionar)
        }
    //▼Generamos la función del menú seleccionado
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
