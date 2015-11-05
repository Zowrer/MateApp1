jQuery(document).ready(function($){
    $("#titulo").append("Bienvenido a mi plantilla");

    //creatMenu(["Menu1", "Menu2", "Menu3"], ["#","#","#"]);

    $("footer").append("@Zowrer");
});

function creatMenu(menus, linksMenus){
    var n = menus.length;
    for (var i = 1; i <= n; i++) {
        var menu = $('#menu' + i);
        if (i != n) {
            var newMenu = menu.clone().attr('id', 'menu' + (i + 1));
            menu.after(newMenu);
        }
        menu.children('a').attr('href', linksMenus[i-1]);
        menu.children('a').html(menus[i-1]);
    }
}
