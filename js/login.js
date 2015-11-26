jQuery(document).ready(function($){
    $( "#btnSubmit" ).click(function(event) {
        var nom = $( "#nombre" ).val();
        var pas = $( "#pass" ).val();

        if ((nom.length  > 0) && (pas.length  > 0)) {
            datos = JSON.parse(localStorage.users);
            for (var i = 0; i < datos.length; i++) {
                if ((nom == datos[i].user) && (pas == datos[i].pass)) {
                    //window.location.href = "menu.html";
                    $('#form').attr({action: 'menu.html'});
                    $('#form').submit();
                }
            }
        }
    });
});
