jQuery(document).ready(function($){
    $( "#btn-submit" ).click(function(event) {
        var nom = $( "#nombre" ).val();
        var pas = $( "#pass" ).val();
        var pas2 = $( "#pass2" ).val();

        if ((nom.length  > 0) && (pas.length  > 0) && (pas2 === pas)) {
            datos = JSON.parse(localStorage.users);

            datos.push({user:nom,pass:pas});

            localStorage.setItem('users',JSON.stringify(datos));

            $('#form').attr({action: 'login.html'});
            $('#form').submit();
        }
    });
});
