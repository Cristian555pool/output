//Primero declaro variable para pedir el nombre con el prompt.
let usuario = prompt("¡Hola! Dime tu nombre para continuar");

 console.log ("Hola " + usuario + " aqui podras ver los numeros pares entre dos numeros que ingreses");
 //Pido los numeros y los guardo en una variable.
 let numero1 = parseInt (prompt("ingresa el numero menor"));
 let numero2 = parseInt (prompt("ingresa otro numero mayor"));
 let resultado = numero1;
 // envio un mensaje para que se vean los numeros seleccionados
 console.log ("los números elegidos son: entre " + numero1 + " y " + numero2);
 //inicio el bucle con sus condiciones para resolver
     while( resultado <= numero2){
     if(resultado % 2 == 0){
      console.log ("Hola " + usuario + " tus numeros pares son " +  resultado);
      }
      resultado++
    }
