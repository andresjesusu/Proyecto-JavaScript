const juegos = [
 {nombre:"Fortnite Leyendas de menta", imagen:"imagen7.jpg", descripcion:["AURA FRESCA, Consigan el botín y compartan frescor. BOMBARDERA DE MENTA El futuro de ve fresco.Caos de menta y una obsesion refrescante.Además, el paquete Leyendas de menta incluye tres mochilas retro, tres picos arponeadores y, para variar un papel picante. Y con 1000 monedas V adicionales incluidas, podrán obtener algo más para completar su aspecto nuevo.El paquete Leyendas de menta de Fortnite estará disponible de forma física y digital el mismo día. Estén atentos para echarle un vistazo próximamente! Hasta entonces, no pierdan su escarcha."], precio:"2.809"},
 {nombre:"Call Of Duty Vanguard", imagen:"imagen8.jpg", descripcion:["Call of Duty: Vanguard lleva de vuelta la saga de acción bélica de Activision a la Segunda Guerra Mundial, invitando al jugador a ser testigo de los orígenes de las Fuerzas especiales mientras desempeña un papel fundamental y cambia la faz de la historia en una apasionante Campaña en cuatro grandes escenarios de guerra. Todo ello sin olvidar el multijugador, que regresa un año más cargado de ritmo e innovación con 20 mapas disponibles de lanzamiento, y un modo Zombies que apuesta por un crossover que expande el universo. Firmado por Sledgehammer Games, COD: Vanguard se puede jugar en PC (Battle.net), PS5, PS4, Xbox Series X|S y Xbox One."], precio:"3.028"},
 {nombre:"Uncharted Alegacy", imagen:"imagen15.jpg", descripcion:["Uncharted The Lost Legacy es el primer videojuego de la saga de acción y aventuras de Naughty Dog alejado del célebre Nathan Drake, que presenta una historia protagonizada por la ingeniosa Chloe Frazer que, en esta ocasión, verá acompañada a sus peligrosas curvas por la experta estratega Nadine Ross que ya ejerció de villana en El Desenlace del Ladrón, el último episodio de la saga. ¿El objetivo de la pareja? Viajar por una cadena montañosa de la India para recuperar el colmillo perdido de Ganesha, una de las deidades más afamadas de todas las de la religión hinduista. "], precio:"3.046"},
 {nombre:"Jurassic World", imagen:"imagen10.jpg", descripcion:["Jurassic World Evolution 2 es un videojuego de estrategia y gestión que aspira a mejorar todo lo visto en el lanzamiento original de la serie, con cuatro modos de juego y una lista mejorada y ampliada de dinosaurios, con más de 75 especies prehistóricas. Cuenta con una nueva y emocionante campaña narrativa, características novedosas y dinosaurios increíbles que cobran vida con un realismo inigualable. Gracias a un mayor número de opciones de construcción y personalización, el resultado es un juego de Jurassic World más grande y más auténtico que nunca"], 
 precio:"3.046"},
 {nombre:"Black Blood", imagen:"imagen11.jpg", descripcion:["Turtle Rock Studios, los creadores de Left 4 Dead o Evolve, presentan ahora Back 4 Blood, su nuevo videojuego de zombies. Se trata de un título de carácter cooperativo en el que combatimos muertos vivientes, como viene siendo tradicional en el estudio, y con el que sus creadores quieren ofrecer un lanzamiento a la altura de sus trabajos anteriores. Ellos mismos lo definen como un título premium, y explican que ha sido creado desde cero para lo mejor,"], precio:"4.677"},
 {nombre:"Ghost", imagen:"imagen12.jpg", descripcion:["Ghost of Tsushima es un videojuego de acción y aventura en mundo abierto protagonizado por un samurai maltratado, luchando contra probabilidades abrumadoras durante la invasión a Japón del ejército mongol en el año 1274. Desarrollado por Sucker Punch, autores de la serie inFAMOUS, Ghost of Tsushima para PS4 garantiza hacer un buen trato de su narrativa así como las habilidades de tal mítica figura guerrera durante el Japón feudal."], precio:"4.685"}];

// Cargo los juegos
cargarjuegos(juegos);

// Asigno el evento click al boton Enviar Datos
document.getElementById("cargar_carrito").addEventListener("click", enviarDatos);

// Asigno el evento click al boton Borrar Datos
document.getElementById("borrar_datos").addEventListener("click", borrarDatos);

// Asigno el evento click al boton ver carrito
document.getElementById("ver_carrito").addEventListener("click", verCarrito);

//JQUERY

$("h1").append("<p style= 'display: none'>Bienvenido a <strong>GAMER HOUSE</strong> tu tienda online de Video Juegos!</p>");
$("p").fadeIn(1000)


//DESAFIO AJAX
$("#oferta").append("<h1>Quieres ver mas ofertas navideñas que tenemos en video juegos, haz click aca!</h1>");

   
$("#boton1").prepend('<button id="btn1" class="btn btn-primary type="button" data-bs-toggle="collapse" data-bs-target="#collapse">MOSTRAR OFERTAS NAVIDEÑAS</button>');


$("#boton2").prepend('<button id="btn2" class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse">NO MOSTRAR OFERTAS</button>');

$("#boton2").click(function() {
    noMostrar();
})
$("#btn1").click(() => { 
    mostrarF();
    $.ajax({
        method: "GET",
        url:  "js/datos.json",
        success: function(respuesta) {
            let contenido = "<table cellpadding='20' cellspacing='20'>"
            let i = 1;

            
            for (let datos of respuesta) {
                contenido += "<tr>";
                contenido += "<td><h4><strong>" + datos.nombre + "</strong></h4></td>";
                contenido += "</tr>"; 
                contenido += "<tr>";
                contenido += "<td><img src='images/" + datos.imagen + "' widht='500' height='500'></td>";
                contenido += "</tr>";
                contenido += "<tr>";
                contenido += "<td><strong>"+ datos.descripcion + "</strong></td>";
                contenido += "</tr>";
                contenido += "<tr>";
                contenido += "<td><h3>$" + datos.precio + "</h3></td>";
                contenido += "</tr>";
            
            }
            
            contenido += "</table>";
            
            
            $("#resultado1").append(contenido);
            
        
        },
        

        error: function(respuesta) {
            $("#resultado1").prepend(`<div><strong>Error!</strong> No se pudo enviar los datos!</div>`);
        }
    });
});

// CSS VIA JQUERY

$("body").css("background-color", "grey");
$("h3").animate({  left:'100px',
                        opacity:'0.5',
                        height:'150px',
                        width:'150px'   }, //1er parámetro propiedades
                        "slow",            //2do parámetro duración 
                        function(){("");
});

