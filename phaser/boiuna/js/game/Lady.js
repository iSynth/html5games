/*global Config, Phaser*/

var Lady = function (game, tilemap) {
	"use strict";
    this.game = game;
	this.group = null;
	this.tilemap = tilemap;
};
Lady.prototype = {
	preload: function () {
		"use strict";
		this.game.load.spritesheet('lady', Config.lady.dir, Config.lady.frame.width, Config.lady.frame.height);
	},
	create: function () {
		"use strict";
		this.group = this.game.add.group();
        this.group.enableBody = true;
        this.tilemap.map.createFromObjects('LayerLady', 7, 'lady', 0, true, false, this.group);
        this.game.physics.enable(this.group, Phaser.Physics.ARCADE);
		this.group.callAll('animations.add', 'animations', 'stay', [0, 1, 2, 1], Config.global.animationVelocity, true);
        this.group.callAll('animations.play', 'animations', 'stay');
		this.group.setAll('alive', true);
	},
	update: function () {
		"use strict";
	}
};

