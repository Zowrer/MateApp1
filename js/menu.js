jQuery(document).ready(function($){
    $('#btnReset').click(function(event) {
        $.getJSON("dat/record.json", function(pts){
            puntos = pts;
            localStorage.setItem('prueba',JSON.stringify(puntos));
        });
    });
});
