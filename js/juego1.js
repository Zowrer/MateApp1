var datos;
var puntos;
var limite;
var ran;
var pos;


jQuery(document).ready(function($){
    $('#titulo').append('Fracciones en el Camino');

    $('#img').attr({
        src: '../img/grafica2.png'
    });

    $.getJSON("dat/juego1.json", function(dat){
        datos = dat;
        limite = datos.length;

        puntos = JSON.parse(localStorage.prueba);

        $_preguntar();
    });


    function $_preguntar(){
        ran = Math.floor(Math.random() * limite);
        pos = Math.floor(Math.random() * 5);

        $('#puntos').html(puntos[0].puntos);
        $('#msj').html(datos[ran].pregunta);

        for (var i = 0; i < 5; i++) {
            var num = Math.floor((Math.random() * 20) + 1);
            if (datos[ran].respuesta != num) {
                $('#options').append('<button class="option submit" id="op'+i+'">'+num+'</button>');
            }

            if (i == pos) {
                $('#options').append('<button class="submit" id="resp">'+datos[ran].respuesta+'</button>');
            }
        }

        $('.option').click(function(event) {
            $('#msjalert').html("Respuesta incorrecta");
            $('.submit').detach();
            $_preguntar();
        });

        $('#resp').click(function(event) {
            $('#msjalert').html("Muy bien");
            puntos[0].puntos = parseInt(puntos[0].puntos) + 1;
            localStorage.setItem('prueba',JSON.stringify(puntos));
            $('.submit').detach();
            $_preguntar();
        });
    }

});
