var NutriEx = {};
NutriEx.Arranque = function(game) {};
NutriEx.Arranque.prototype = {
	preload: function() {
		//Imagen para Sprites mientras carga 
		this.load.image('preloaderBar', 'img/loading-bar.png');
	},
	create: function() {
		//Parametros para el canvas 
		this.game.input.maxPointers = 1;
		this.game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
		this.game.stage.scale.pageAlignHorizontally = true;
		this.game.stage.scale.pageAlignVertically = true;
		this.game.stage.scale.setScreenSize(true);
		
		this.game.state.start('Carga');
	}
};