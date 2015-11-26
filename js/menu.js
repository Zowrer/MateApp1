jQuery(document).ready(function($){
    $('#btnReset').click(function(event) {
        $.getJSON("dat/record.json", function(pts){
            puntos = pts;
            localStorage.setItem('prueba',JSON.stringify(puntos));
        });
    });

    $('#btnSalir').click(function(event) {
        navigator.app.exitApp();
    });

    $('#btnRandom').click(function(event) {
        var r = Math.floor(Math.random() * 15);
        window.location.href = "juego"+r+".html";
    });
});
