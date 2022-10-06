/*
//AJAX Y FETCH
fetch ('https://jsonplaceholder.typicode.com/posts')
.then((response)=> response.json())
.then((datos)=> {
    console.log(datos);
    datos.forEach(post => {
      const li = document.createElement('li');
      li.innerHTML=`
      <h3>${post.tittle}</h3>
      <p>${post.body}</p>
      `;
      lista.append(li)
    });
})
*/





let divProductos = document.getElementById("animes")

//▼Fetch a pagina Anime Naruto ►primer API con método GET

 fetch('https://animechan.vercel.app/api/quotes/anime?title=naruto&page=2')
    .then(response => response.json())
    .then((datos) => {
        console.log(datos)
        for (let anime of datos) {
            let divAnimes = document.createElement("div")
            divAnimes.innerHTML = `<div id="animes">
                <div class="card-body">
                    <h2 class="card-title">${anime.character}</h5>
                    <p class="">${anime.datos}</p>
                    <p class="">Anime: ${anime.anime}</p>
                </div>
            </div>`
            divProductos.appendChild(divAnimes)
        }
    });