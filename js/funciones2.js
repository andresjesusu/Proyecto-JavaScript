function cargarjuegos(juegos) {
    let contenido = "";
    let i = 1;
    
    for (let juego of juegos) {
        contenido += "<div class='col-4 py-3'>";
        contenido += "<div class='card'>";
        contenido += "<div class='p-3'><h5 id='juego_juegos" + i + "' class='text-primary fw-bold'>" + juego.nombre.toUpperCase() + "</h5></div>";
        contenido += "<img id='juego_imagen" + i + "' src='images/" + juego.imagen + "' class='card-img-top' alt='" + juego.nombre + "' onclick=asignarDatos('juego_juegos" + i + "');>";
    

        // Boton de descripción
        contenido += "<div class='p-3'><button id='comprarB' class='btn btn-info' type='button' data-bs-toggle='collapse' data-bs-target='#collapse" + i + "' aria-expanded='false' aria-controls='collapseExample'>Descripción</button></div>";
        contenido += "<div class='collapse' id='collapse" + i + "'>";
        contenido += "<div class='card card-body'>";
        contenido += "<ul>";

        for (let descrip of juego.descripcion) {
            contenido += "<p>" + descrip + "</p>";
        }
        
        contenido += "</ul>";
        contenido += "</div>";
        contenido += "</div>";
        contenido += "<div class='p-3'><button class='comprar_1 btn btn-success' onclick='asignarDatos' type='button'" + i + "' aria-expanded='false' aria-controls='collapseExample'>Comprar</button></div>";
    

        contenido += "<div class='card-body'>";
        contenido += "<div class='row'>";
        contenido += "<div class='col'><p class='text-primary text-uppercase'>Precio contado</p></div>";
        contenido += "<div class='col text-end'><p id='juego_precio" + i + "' class='text-primary fw-bold'><strong>$" + juego.precio + "</strong></p></div>";
        contenido += "</div>";
        contenido += "</div>";
        contenido += "</div>";
        contenido += "</div>";
        i++;
    }

    document.getElementById("juegos").innerHTML = contenido;
}

function asignarDatos(juego) {
    var juego_seleccionado = document.getElementById("juego_seleccionado");
    var precio_seleccionado = document.getElementById("precio_seleccionado");

    if (juego == "juego_juegos1") {
        juego_seleccionado.value = juegos[0].nombre;
        precio_seleccionado.value = juegos[0].precio;
    } else if (juego == "juego_juegos2") {
        juego_seleccionado.value = juegos[1].nombre;
        precio_seleccionado.value = juegos[1].precio;
    } else if (juego == "juego_juegos3") {
        juego_seleccionado.value = juegos[2].nombre;
        precio_seleccionado.value = juegos[2].precio;
    }
    if (juego == "juego_juegos4") {
        juego_seleccionado.value = juegos[3].nombre;
        precio_seleccionado.value = juegos[3].precio;
    } else if (juego == "juego_juegos5") {
        juego_seleccionado.value = juegos[4].nombre;
        precio_seleccionado.value = juegos[4].precio;
    } else if (juego == "juego_juegos6") {
        juego_seleccionado.value = juegos[5].nombre;
        precio_seleccionado.value = juegos[5].precio;
    }
}


// Envia los datos de mi Formulario y los guarda en un LocalStorage
function enviarDatos() {
    if ($("#juego_seleccionado").val() == "") {
        $("#juego_seleccionado").addClass("is-invalid");
        $("#juego_seleccionado").focus();
        return false;
    }

    $("#juego_seleccionado").removeClass("is-invalid");
    $("#juego_seleccionado").addClass("is-valid");
    var juego_seleccionado = document.getElementById("juego_seleccionado").value;
    var precio_seleccionado = document.getElementById("precio_seleccionado").value;

    if (juego_seleccionado == "") {
        document.getElementById("resultado").innerHTML = "<p class='text-white bg-danger p-3'>Error! El campo juego está vacío!</p>";
        return false;
    }

    if ((precio_seleccionado == "") || (parseInt(precio_seleccionado) <= 0)) {
        document.getElementById("resultado").innerHTML = "<p class='text-white bg-danger p-3'>Error! El campo Precio está vacío!</p>";
        return false;
    }

    
    
    localStorage.setItem("datos_formulario", JSON.stringify([juego_seleccionado, precio_seleccionado]));
    document.getElementById("resultado").innerHTML = "<p class='text-white bg-black p-3'>Cargado al carrito correctamente</p>";
}

function cargarDatos() {
    var datos = JSON.parse(localStorage.getItem("datos_formulario"));
    document.getElementById("juego_seleccionado").value = datos[0];
    document.getElementById("precio_seleccionado").value = datos[1];

    document.getElementById("resultado").innerHTML = "<p class='text-white bg-black p-3'>Los datos se cargaron correctamente!</p>";
}

function borrarDatos() {
    document.getElementById("juego_seleccionado").value = "";
    document.getElementById("precio_seleccionado").value = "";
    localStorage.clear();
    document.getElementById("resultado").innerHTML = "<p class='text-white bg-black p-3'>Eliminado del Carrito Correctamente</p>";
}

function mostrarF() {
    $("#resultado1").fadeIn(500);
}

function noMostrar() {
    $("#resultado1").fadeOut(500);
}

function verCarrito() {
    var datos = JSON.parse(localStorage.getItem("datos_formulario"));
    document.getElementById("resultado").innerHTML = "<p class='text-white bg-black p-3'>" + datos + "$ pesos Argentinos.</p>";
    var juego_seleccionado = document.getElementById("juego_seleccionado").value;
    var precio_seleccionado = document.getElementById("precio_seleccionado").value;

    if (juego_seleccionado == "") {
        document.getElementById("resultado").innerHTML = "<p class='text-white bg-danger p-3'>Error! El carro está vacío!</p>";
        return false;
    }

    if ((precio_seleccionado == "") || (parseInt(precio_seleccionado) <= 0)) {
        document.getElementById("resultado").innerHTML = "<p class='text-white bg-danger p-3'>Error! El carro está vacío!</p>";
        return false;
    }

};