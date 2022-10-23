//Creamos la estructura de los objetos
class Guitars{
    constructor (id, modelo, anio, precio, color, imagen){
        this.id = id;
        this.modelo = modelo;
        this.anio = anio;
        this.precio = precio;
        this.color = color;
        this.imagen = imagen;
    };
};
//▼Creamos los nuevos Array
let conjuntoGuitarras = []
//▼Realizamos llamada - Aplicamos Fetch con Await. Asincrónico.
const cargarConjunto = async () =>{
    const response = await fetch("guitarras.json")
    const data = await response.json()
    for(let guitarra of data){
                let guitarraNuevo = new Guitars(guitarra.id, guitarra.modelo, guitarra.anio, guitarra.precio, guitarra.color, guitarra.imagen)
                conjuntoGuitarras.push(guitarraNuevo)
            }
}
cargarConjunto()