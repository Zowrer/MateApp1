var contador = 1;

jQuery(document).ready(function($){
    $( ".header" ).load( "header.html", function() {
        main();
    });

    $(".footer").append("Aplicaciones Moviles Otoño 2015");

    function main () {
        $('.menu_bar').click(function(){
            if (contador == 1) {
                $('nav').animate({
                    left: '0'
                });
                contador = 0;
            } else {
                contador = 1;
                $('nav').animate({
                    left: '-100%'
                });
            }
        });

        $('.submenu').click(function(){
            $(this).children('.children').slideToggle();
        });
    }
});
