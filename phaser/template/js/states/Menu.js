/*global State, Config*/

State.Menu = function (game) {
	"use strict";
	this.game = game;
};
State.Menu.prototype = {
	preload: function () {
		"use strict";
		this.game.load.image('menu-background',  Config.menu.dir);
		this.game.load.spritesheet('button-play', Config.menu.buttonPlay.dir, Config.menu.buttonPlay.width, Config.menu.buttonPlay.height);
		this.game.load.spritesheet('button-credits', Config.menu.buttonCredits.dir, Config.menu.buttonCredits.width, Config.menu.buttonCredits.height);
		this.game.load.spritesheet('button-how-to-play', Config.menu.buttonHowToPlay.dir, Config.menu.buttonHowToPlay.width, Config.menu.buttonHowToPlay.height);
	},
	create: function () {
		"use strict";
		var background, buttonPlay, buttonCredits, buttonHowToPlay ;
		background = this.game.add.sprite(Config.menu.x, Config.menu.y, 'menu-background');
		buttonPlay = this.game.add.button(Config.menu.buttonPlay.x, Config.menu.buttonPlay.y, 'button-play', this.clickPlay, this, 0, 1, 2, 3);
		buttonPlay.anchor.setTo(Config.menu.buttonPlay.anchor.x, Config.menu.buttonPlay.anchor.y);
		buttonHowToPlay = this.game.add.button(Config.menu.buttonHowToPlay.x, Config.menu.buttonHowToPlay.y, 'button-how-to-play', this.clickHowToPlay, this, 0, 1, 2, 3);
		buttonHowToPlay.anchor.setTo(Config.menu.buttonHowToPlay.anchor.x, Config.menu.buttonHowToPlay.anchor.y);
		buttonCredits = this.game.add.button(Config.menu.buttonCredits.x, Config.menu.buttonCredits.y, 'button-credits', this.clickCredits, this, 0, 1, 2, 3);
		buttonCredits.anchor.setTo(Config.menu.buttonCredits.anchor.x, Config.menu.buttonCredits.anchor.y);
	},
	clickPlay: function () {
		"use strict";
		this.game.state.start('Game');
	},
	clickHowToPlay: function () {
		"use strict";
		this.game.state.start('HowToPlay');
	},
	clickCredits: function () {
		"use strict";
		this.game.state.start('Credits');
	}
};