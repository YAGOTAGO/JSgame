class MainMenu extends Phaser.Scene {

    constructor(){
        super({key: "MainMenu"});
    }

    //load before scene
    preload(){
        this.load.image('DripGuy', 'assets/dripGuy.png');
    }

    //when scene is created
    create(){
        this.image = this.add.image(400, 300, 'DripGuy');

        this.input.keyboard.on('keyup-D', function (event){
            this.image.x += 50;
        }, this);

        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

        this.input.on('pointerdown', function(event){
            this.image.x = event.x;
            this.image.y = event.y;
        }, this);

        this.input.keyboard.on('keydown-P', function(event){
            var physicsImage = this.physics.add.image(this.image.x, this.image.y, "DripGuy");
            physicsImage.setVelocity(Phaser.Math.Between(-100,100), -300);
        }, this);

    }

    update(delta){
        if(this.key_A.isDown)
            this.image.x--;
    }

}

