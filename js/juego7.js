var datos;
var puntos;
var limite;
var ran;
var pos;


jQuery(document).ready(function($){
    $('#titulo').append('Memorama');

    $.getJSON("dat/juego7.json", function(dat){
        datos = dat;
        limite = datos.length;

        puntos = JSON.parse(localStorage.prueba);

        $_init();
    });


    function $_init(){

        var celdas = new Array("00","01","02","03","10","11","12","13","20","21","22","23","30","31","32","33");
        var par;
        var idx;
        var celda;

        for (var i = 0; i < 7; i++) {
            par = datos[Math.floor(Math.random() * limite)];

            if (celdas.length > 2) {
                idx = Math.floor(Math.random() * celdas.length);
                celda = celdas.splice(idx, 1);
            }else {
                celda = celdas.pop();
            }

            $('#'+celda).append('<button class="option submit">'+par.pregunta+'</button>');

            if (celdas.length > 1) {
                idx = Math.floor(Math.random() * celdas.length);
                celda = celdas.splice(idx, 1);
            }else {
                celda = celdas.pop();
            }

            $('#'+celda).append('<button class="option submit">'+par.respuesta+'</button>');
        }
        /*
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                $('#'+i+''+j).append('<button class="option submit" id="op'+i+'">'+llaves[Math.floor(Math.random() * 7)].pregunta+'</button>');
            }
        }
        */
        /*
        $('.option').click(function(event) {
            $('#msjalert').html("Respuesta incorrecta");
            $('#imgresp').attr({ src: '../img/no.png' });
            $('.submit').detach();
            $_preguntar();
        });
        */
        /*
        $('#resp').click(function(event) {
            $('#msjalert').html("Muy bien");
            $('#imgresp').attr({ src: '../img/ok.png' });
            puntos[0].puntos = parseInt(puntos[0].puntos) + 1;
            localStorage.setItem('prueba',JSON.stringify(puntos));
            $('.submit').detach();
            $_preguntar();
        });
        */
    }

});
