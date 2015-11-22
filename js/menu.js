jQuery(document).ready(function($){
    $('.hidden').css({ 'display': 'none' });

    $('#btnBlok').click(function(event) {
        $('#bloques ').css({ 'display': 'block' });
        $('.btnA').css({ 'display': 'none' });
    });

    $('#back').click(function(event) {
        $('.hidden').css({ 'display': 'none' });
        $('.btnA').css({ 'display': 'block' });
    });

    $('.btnB').click(function(event) {
        $("#area-"+$(this).attr("id")).css({ 'display': 'block' });
        $('#bloques').css({ 'display': 'none' });
    });

    $('.back').click(function(event) {
        $('.hidden').css({ 'display': 'none' });
        $('#bloques').css({ 'display': 'block' });
    });

    $('.btn').click(function(event) {
        $("#area-"+$(this).attr("id")).css({ 'display': 'block' });
        window.location.href = $(this).attr("id")+".html";
    });

    $('#btnRand').click(function(event) {
        window.location.href = "juego"+Math.floor((Math.random() * 15) + 1)+".html";
    });
});
