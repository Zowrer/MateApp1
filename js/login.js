jQuery(document).ready(function($){
    $( ".login" ).click(function(event) {
        var nom = $( "#nombre" ).val();
        var pas = $( "#pass" ).val();

        if ((nom.length  > 0) && (pas.length  > 0)) {
            datos = JSON.parse(localStorage.users);
            for (var i = 0; i < datos.length; i++) {
                if ((nom == datos[i].user) && (pas == datos[i].pass)) {
                    $('#form').attr({action: 'menu.html'});
                    $('#form').submit();
                }
            }
        }
    });
});
