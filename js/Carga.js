NutriEx.Carga = function(game) {};
NutriEx.Carga.prototype = {
	preload: function() {
		//color de fondo del juego
		this.game.stage.backgroundColor = '#E6FF69';

		//Sprites para mostrar mientras carga
		this.preloadBar = this.add.sprite(50, 50, 'preloaderBar');

		//Comienza la carga
		this.load.setPreloadSprite(this.preloadBar);

		//tiles
		//this.load.tilemap('map1','src/map1.json', null, Phaser.Tilemap.TILED_JSON);
		//this.load.image('tile', 'img/tile.png');

		//this.load.tilemap('map2','src/map2.json', null, Phaser.Tilemap.TILED_JSON);
		//this.load.image('nutritile', 'img/nutritile.png');

		//this.load.tilemap('minimap3','src/minimap3.json', null, Phaser.Tilemap.TILED_JSON);
/*
		//Cargando imagenes necesarias en el juego
		//this.load.image('button-pause', 'img/button-pause.png');
		this.load.image('boton_jugar', 'img/botones/jugar.png');
		this.load.image('boton_guardar', 'img/botones/guardar.png');
		this.load.image('boton_creditos', 'img/botones/creditos.png');
		this.load.image('boton_regresar', 'img/botones/regresar.png');
		this.load.image('boton_continuar', 'img/botones/continuar.png');
		this.load.image('boton_ayuda', 'img/botones/ayuda.png');
		this.load.image('boton_evaluar', 'img/botones/evaluar.png')
		this.load.image('buen_comer', 'img/buen_comer.png');
		this.load.image('madera', 'img/madera.png');
		this.load.image('piedra', 'img/piedra.png');
		this.load.image('ladrillor', 'img/ladrillor.png');
		this.load.image('ladrillov', 'img/ladrillov.png');
		this.load.image('ladrillov2', 'img/ladrillov2.png');
		this.load.image('ladrillov3', 'img/ladrillov3.png');
		this.load.image('ladrillov4', 'img/ladrillov4.png');
		this.load.image('barraVer', 'img/barraVer.png');
		this.load.image('barraFru', 'img/barraFru.png');
		this.load.image('barraAni', 'img/barraAni.png');
		this.load.image('barraLeg', 'img/barraLeg.png');
		this.load.image('barraCer', 'img/barraCer.png');
		this.load.image('jitomate', 'img/jitomate.png');
		this.load.image('menu_principal', 'img/screen-mainmenu.png');
		this.load.image('fondo_reinos', 'img/fondos/fondo_reinos.png');
		this.load.image('fondo_niveles', 'img/fondos/fondo_niveles.png');
		this.load.image('fondo_datos', 'img/fondos/fondo_datos.png');
		this.load.image('fondo_tips', 'img/fondos/fondo_tips.png');
		this.load.image('fondo_creditos', 'img/fondos/fondo_creditos.png');
		this.load.image('fondo_inst_mundo', 'img/fondos/fondo_inst_mundo.png');
		this.load.image('fondo_inst_plato', 'img/fondos/fondo_inst_plato.png');
		this.load.image('fondo_inst_comer', 'img/fondos/fondo_inst_comer.png');
		this.load.image('fondo_expedicion', 'img/fondos/fondo_expedicion.png');
		this.load.image('fondo_plato', 'img/fondos/fondo_plato.png');
		this.load.image('fondo_comer', 'img/fondos/fondo_comer.png');
		this.load.image('AyudaP', 'img/fondos/ayuda.png');
		this.load.image('sabioaliment', 'img/sabioaliment.png');
		this.load.image('indicador', 'img/botones/indicador.png');
		this.load.image('tablero_de_edad', 'img/botones/tablero_de_edad.png');
		this.load.image('boca', 'img/boca.png');
		this.load.image('cabello', 'img/cabello.png');
		this.load.image('huesos', 'img/huesos.png');
		this.load.image('pies', 'img/pies.png');
		this.load.image('vista', 'img/vista.png');
*/
/*
		//Cargando imagenes de comida
		this.load.image('coliflor', 'img/comida/COLIFLOR.png');
		this.load.image('manzana', 'img/comida/MANZANA.png');
		this.load.image('bistek', 'img/comida/bistek.png');
		this.load.image('chicharo', 'img/comida/chicharo.png');
		this.load.image('huevo', 'img/comida/huevo.png');
		this.load.image('frijol', 'img/comida/frijol.png');
		this.load.image('mazorca', 'img/comida/mazorca.png');
		this.load.image('pezcado', 'img/comida/pezcado.png');
		this.load.image('salchicha', 'img/comida/salchicha.png');
		this.load.image('fruta', 'img/comida/manz.png');
		this.load.image('platano', 'img/comida/PLATANO.png');
		this.load.image('zanahoria', 'img/comida/ZANAHORIA.png');
		this.load.image('zana', 'img/comida/zana.png');
		this.load.image('broc', 'img/comida/broc.png');

		//Cargando Sprites
		this.load.spritesheet('SexM', 'img/botones/SexM.png', 145, 133);
		this.load.spritesheet('SexF', 'img/botones/SexF.png', 145, 133);
		this.load.spritesheet('boton_b1', 'img/botones/b1.png', 80, 80);
		this.load.spritesheet('boton_b2', 'img/botones/b2.png', 80, 80);
		this.load.spritesheet('boton_b3', 'img/botones/b3.png', 80, 80);
		this.load.spritesheet('boton_b4', 'img/botones/b4.png', 80, 80);
		this.load.spritesheet('boton_b5', 'img/botones/b5.png', 80, 80);
		//this.load.spritesheet('button-audio', 'img/button-audio.png', 35, 35);
		this.load.spritesheet('sabio', 'img/sabio.png', 96, 160);
		this.load.spritesheet('runer', 'img/runer.png', 96, 160);
		this.load.spritesheet('runer2', 'img/runer2.png', 96, 160);
		this.load.spritesheet('nutri-boy', 'img/nutri-boy.png', 96, 160);
		this.load.spritesheet('dona', 'img/dona.png', 160, 160);
		this.load.spritesheet('lombriz', 'img/lombriz.png', 172, 76);
		this.load.spritesheet('huevo', 'img/huevo.png', 224, 248);
		this.load.spritesheet('yema', 'img/lombriz.png', 112, 96);
		this.load.spritesheet('poder', 'img/poder.png',40, 40);
		this.load.spritesheet('fondo_expedicion_animado', 'img/fondos/fondo_expedicion_animado.png',720, 480);

	*/
		this.load.image('menu_principal', 'img/screen-mainmenu.png');
		//Cargando audio
		this.load.audio('music', ['audio/music.ogg']);
		this.load.audio('toing', ['audio/toing.ogg']);
	},
	create: function() {
		this.game.state.start('MenuPrincipal');
	}
};
