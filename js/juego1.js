jQuery(document).ready(function($){
    $('#titulo').append('Fracciones en el Camino');

    $.getJSON("dat/juego1.json", function(datos) {
                $('#msj').html(datos[0].pregunta);
                for (var i = 0; i < 5; i++) {
                    var num = Math.floor((Math.random() * 20) + 1);
                    if (datos[0].respuesta != num) {
                        $('#options').append('<button class="option" id="op'+i+'">'+num+'</button>');
                    }
                }
                $('#options').append('<button id="resp">'+datos[0].respuesta+'</button>');

                $('.option').click(function(event) {
                    alert("mal");
                });

                $('#resp').click(function(event) {
                    alert("bien");
                });
            });
});
