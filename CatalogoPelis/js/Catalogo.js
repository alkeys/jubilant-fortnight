/*
*   Elige tu tema favorito para adaptar a nuestro código, es decir, en lugar de películas, puede ser una lista de animes, cómics, cursos, capas de juegos, entre otros;
    Intenta implementar otras versiones de la estructura de repetición que hicimos con for, como por ejemplo cambiar el for por el while;
    Crear una segunda lista para agregar los nombres de las películas abajo de las imágenes;
    Crea una condición para no agregar películas repetidas, en caso de que ya hayan sido agregadas anteriormente;
    Crea un campo y un botón para agregar la imagen a través de la pantalla, y no directamente en el código.
*
* */
var CatalogoPeliculas = {
    peliculas: [
        {
            nombre: "El Padrino",
            imagen: "https://cdn.sincroguia.tv/uploads/programs/e/l/-/el-padrino-poster-2981_SPA-17_V.jpg"
        },
        {
            nombre: "El Padrino 2",
            imagen: "https://pablobedrossian.files.wordpress.com/2023/07/el-padrino-ii-05.jpg?w=1280&h=720&crop=1"
        },
        {
            nombre: "El señor de los anillos",
            imagen: "https://www.lavanguardia.com/files/article_gallery_microformat/uploads/2021/03/17/6051ea0188c59.jpeg"
        }, {
            nombre: "El retorno del rey",
            imagen: "https://pics.filmaffinity.com/El_seanor_de_los_anillos_El_retorno_del_rey-178294596-mmed.jpg"
        },
        {
            nombre: "El retorno del rey",
            imagen: "https://pics.filmaffinity.com/El_seanor_de_los_anillos_El_retorno_del_rey-178294596-mmed.jpg"
        },
        {
            nombre: "El viaje de Chihiro",
            imagen: "https://es.web.img2.acsta.net/pictures/21/05/11/13/47/5979708.jpg"
        }, {
            nombre: "El viaje de Chihiro",
            imagen: "https://es.web.img2.acsta.net/pictures/21/05/11/13/47/5979708.jpg"
        }
    ],
};

// Función para mostrar el catálogo de películas en el aside

window.onload = function() {
    mostrarCatalogo();
};

 function mostrarCatalogo() {

    var catalogoXd = document.getElementById("CatalogoLista");
    var catalogoFiltrado = {};
    var cont = 0;
    catalogoXd.innerHTML = "";
    //Filtrado para no repetir peliculas
    for (var i = 0; i < CatalogoPeliculas.peliculas.length; i++) {
        var pelicula = CatalogoPeliculas.peliculas[i];
        if (!catalogoFiltrado[pelicula.nombre]) {
            catalogoFiltrado[pelicula.nombre] = pelicula;
        }
    }
    var pelisarrays = Object.values(catalogoFiltrado);
    while (cont < pelisarrays.length) {
        var pelicula = pelisarrays[cont];
        var imagen = document.createElement("img");
        var nombre = document.createElement("p");
        nombre.textContent = pelicula.nombre;
        imagen.classList.add("imagenCatalogo");
        imagen.src = pelicula.imagen;
        imagen.alt = pelicula.nombre;
        imagen.title = pelicula.nombre;

        var contenido = document.createElement("div");
        contenido.classList.add("contenido");
        contenido.appendChild(imagen);
        contenido.appendChild(nombre);
        catalogoXd.appendChild(contenido);
        cont++;
    }
}

function AgregarPelicula() {
    var nombre = document.getElementById("NombrePeli").value;
    var imagen = document.getElementById("url").value;


    if (nombre && imagen) {
        CatalogoPeliculas.peliculas.push({nombre: nombre, imagen: imagen});
        mostrarCatalogo()
    } else {
        alert("Debes llenar ambos campos");
    }
    var elementoVentas = document.getElementById("window-notice");
    elementoVentas.style.display = "none";
}

function MostrarVentana() {
    var elementoVentas = document.getElementById("window-notice");
    elementoVentas.style.display = "block";
}