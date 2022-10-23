let divProductos = document.getElementById("songs")

//▼Fetch a pagina Canciones Metallica ►primer API con método GET

fetch('http://www.songsterr.com/a/ra/songs/byartists.xml?artists=Metallica')
    .then(response => response.json())
    .then((datos) => {
        console.log(datos)
        for (let metallica of datos.NSArray) {
            console.log(metallica)
        }
    })
