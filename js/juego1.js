jQuery(document).ready(function($){
    $('#titulo').append('Fracciones en el Camino');

    $('#img').attr({
        src: '../img/grafica2.png'
    });

    $.getJSON("dat/juego1.json", function(datos){
        var limite = datos.length;
        var ran = Math.floor(Math.random() * limite);
        var pos = Math.floor(Math.random() * 5);

        $('#msj').html(datos[ran].pregunta);

        for (var i = 0; i < 5; i++) {
            var num = Math.floor((Math.random() * 20) + 1);
            if (datos[ran].respuesta != num) {
                $('#options').append('<button class="option" id="op'+i+'">'+num+'</button>');
            }

            if (i == pos) {
                $('#options').append('<button id="resp">'+datos[ran].respuesta+'</button>');
            }
        }

        $('.option').click(function(event) {
            alert("mal");
        });

        $('#resp').click(function(event) {
            alert("bien");
        });
    });
});
