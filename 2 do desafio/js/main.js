//►Simulador de un asignador Vacaciones para una empresa particular.
//►se le pedira a los usuarios que ingresen sus categorias para obtener que tiempo de vacaciones debe tomarse.
//►Para ello vamos a preguntar el nombre al usuario, categoria y antiguedad.

//►Iniciamos simulador
//►Almacenamos el nombre del usuario 
//pido usuario el nombre por medio de un promt y declaro variable
let usuario = prompt("Ingrese nombre del trabajador/a");
//le doy una bienvenida
alert("Bienvenido/da " + usuario + " al calculador de vacaciones");
//►Hice un buble para pedirle que seleccione una categoria
//►EL bucle es para que no permita pasar si ingresa una categoria incorrecta
let categoria;
        do {
            categoria = parseInt(prompt("Seleccione categoria:\nCategoria 1 (Operario)\nCategoria 2 (Gerencia)\nCategoria 3 (Presidente) "))
        } while (categoria != 1 && categoria != 2 && categoria !=3);
        
//► Pedimos que ingrese la antiguedad para que pueda pasar a las condiciones.
let antiguedad = parseInt (prompt("indique con un numero años en la empresa?"));

//►En caso de que ingrese categoria 1 pasara a ejecutarse las siguientes.
if( categoria == 1 ) {

  if( antiguedad == 1 ) {
    alert("Al trabajador/a " + usuario + " le correspoden 6 dias de vacaciones");
  } else if ( antiguedad >= 2 && antiguedad <= 4 ) { 
    alert("Al trabajador/a " + usuario + " le correspoden 14 dias de vacaciones");
  } else if( antiguedad >=5 ){
    alert("Al trabajador/a " + usuario + " le correspoden 21 dias de vacaciones");
  } else if ( antiguedad ==0 ) { 
    alert("Al trabajador/a " + usuario + " no le correspoden dias de vacaciones");
  }
  }


//►Aqui corren las condiciones para la categoria 2
if( categoria == 2 ) {


  if(antiguedad == 1){
    alert("Al trabajador/a " + usuario + " le correspoden 8 dias de vacaciones");
  } else if ( antiguedad >= 2 && antiguedad <= 4 ) { 
    alert("Al trabajador/a " + usuario + " le correspoden 17 dias de vacaciones");
  } else if( antiguedad >= 5 ){
    alert("Al trabajador/a " + usuario + " le correspoden 24 dias de vacaciones");
  } else if ( antiguedad ==0 ) { 
    alert("Al trabajador/a " + usuario + " no le correspoden dias de vacaciones");
  }
  }

//►Aqui corren las condiciones para la categoria 3
if( categoria == 3 ){

  if (antiguedad == 1){
    alert("Al trabajador " + usuario + " le correspoden 10 dias de vacaciones");
  } else if ( antiguedad >= 2 && antiguedad <= 4 ) { 
    alert("Al trabajador " + usuario + " le correspoden 20 dias de vacaciones");
  } else if( antiguedad >= 5 ){
    alert("Al trabajador " + usuario + " le correspoden 30 dias de vacaciones");
  } else if ( antiguedad ==0 ) { 
    alert("Al trabajador/a " + usuario + " no le correspoden dias de vacaciones");
  }
  }
 
//Mensaje saludo || despedida.
alert("Gracias por usar nuestro sistema");
