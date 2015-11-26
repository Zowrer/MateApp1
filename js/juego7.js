var datos;
var puntos;
var limite;

var celdas = new Array("00","01","02","03","10","11","12","13","20","21","22","23","30","31","32","33");
var par;
var idx;
var celda;
var key;

var id;
var pulse = -1;
var band = false;


jQuery(document).ready(function($){

    $('#titulo').append('Memorama');

    $.getJSON("dat/juego7.json", function(dat){
        datos = dat;
        limite = datos.length;

        puntos = JSON.parse(localStorage.prueba);

        $_init();
    });

    function $_rest(btn1,btn2){
        $('#'+btn1).css({ color: '#023859'});
        $('#'+btn2).css({ color: '#023859'});
    }

    function $_init(){
        $('#puntos').html(puntos[6].puntos);

        for (var i = 0; i < 8; i++) {
            limite = datos.length;
            key = Math.floor(Math.random() * limite);
            //par = datos[key];
            par = datos.splice(key, 1);

            if (celdas.length > 2) {
                idx = Math.floor(Math.random() * celdas.length);
                celda = celdas.splice(idx, 1);
            }else {
                celda = celdas.pop();
            }

            var pre = par[0].pregunta;
            var res = par[0].respuesta;

            $('#'+celda).append('<button class="memo evt" id="a'+i+'">'+pre+'</button>');

            if (celdas.length > 1) {
                idx = Math.floor(Math.random() * celdas.length);
                celda = celdas.splice(idx, 1);
            }else {
                celda = celdas.pop();
            }

            $('#'+celda).append('<button class="memo evt" id="b'+i+'">'+res+'</button>');
        }

        $('.evt').click(function(event) {
            band = !band;

            if (band) {
                pulse = $(this).attr('id');
                $('#'+pulse).css({ color: '#ffffff'});
            } else{
                id = $(this).attr('id');
                $('#'+id).css({ color: '#ffffff'});

                var btn1 = pulse.replace("a", "");
                var btn2 = id.replace("a", "");

                btn1 = btn1.replace("b", "");
                btn2 = btn2.replace("b", "");

                if (btn1 == btn2) {
                    $('#msjalert').html("Muy bien");
                    $('#imgresp').attr({ src: '../img/ok.png' });
                    puntos[6].puntos = parseInt(puntos[6].puntos) + 1;
                    localStorage.setItem('prueba',JSON.stringify(puntos));
                    $('#puntos').html(puntos[6].puntos);
                }
                else {
                    $('#msjalert').html("Intentalo de nuevo");
                    $('#imgresp').attr({ src: '../img/no.png' });
                    setTimeout($_rest, 1000, pulse, id);
                }
            }
        });

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
