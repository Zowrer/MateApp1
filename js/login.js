jQuery(document).ready(function($){
    $( "#ingresar" ).click(function(event) {
        var nom = $( "#user" ).val();
        var pas = $( "#pass" ).val();

        if ((nom.length  > 0) && (pas.length  > 0)) {
            $.getJSON("dat/users.json", function(datos) {
                for (var i = 0; i < datos.length; i++) {
                    if ((nom == datos[i].user) && (pas == datos[i].pass)) {
                        window.location.href = "menu.html";
                    }
                }
            });
        }
    });
});
