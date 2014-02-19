//Vari�veis de JOGO
var screen = null;

//Vari�veis do ASTEROID
var asteroidSprite;
var angularVelocity = 3;
var velocityX = 3;
var velocityY = 3;

var angle = 0;


var AsteroidLayer = cc.Layer.extend({
	spriteFrameCache: cc.SpriteFrameCache.getInstance(),
	
    init:function()
    {
		var i;

		//Pega o tamanho da tela
	    screen = cc.Director.getInstance().getWinSize();
	    //Cria o Layer do jogo
		this.layerGame = cc.LayerColor.create(new cc.Color4B(0, 0, 0, 255), 800, 480);    
	    
        //Coloca GameSpriteSheet na mem�ria
        this.spriteFrameCache.addSpriteFrames("res/spritesheets/GameSpriteSheet.plist", "res/spritesheets/GameSpriteSheet.png");

		for(i=0; i<7; i++){
			var asteroidSprite = cc.Sprite.createWithSpriteFrameName("asteroid2_118-118.png");
			var randomDir = Math.random()*2*Math.PI;
			
			asteroidSprite.xSpeed = velocityX*Math.cos(randomDir);
			asteroidSprite.ySpeed = velocityY*Math.sin(randomDir);
			this.layerGame.addChild(asteroidSprite);
			
			asteroidSprite.setPosition(new cc.Point(Math.random()*500, Math.random()*500));
			
			asteroidSprite.schedule(function(){
     			this.setPosition(new cc.Point(this.getPosition().x + this.xSpeed, this.getPosition().y + this.ySpeed));
     			if(this.getPosition().x > screen.width){
					this.setPosition(new cc.Point(this.getPosition().x - screen.width,this.getPosition().y));
				}
				if(this.getPosition().x < 0){
					this.setPosition(new cc.Point(this.getPosition().x + screen.width,this.getPosition().y));
				}
				if(this.getPosition().y > screen.width){
					this.setPosition(new cc.Point(this.getPosition().x ,this.getPosition().y - screen.width));
				}
				if(this.getPosition().y < 0){
					this.setPosition(new cc.Point(this.getPosition().x ,this.getPosition().y + screen.width));
				}
			});
		}
		
     	this.addChild(this.layerGame);
		return true;
    }
});

var AsteroidScene = cc.Scene.extend({
    onEnter:function(){
        this._super();
        var layer = new AsteroidLayer();
        layer.init();
        this.addChild(layer);
    }
});