var TopDownGame = TopDownGame || {};
var lives = 100;
var map;
//title screen
TopDownGame.Game = function() {};

TopDownGame.Game.prototype = {
    create: function() {

        this.map = this.game.add.tilemap('level1');

        this.map.addTilesetImage('tiles', 'gameTiles');


        this.backgroundlayer = this.map.createLayer('backgroundLayer');
        this.blockedLayer = this.map.createLayer('blockedLayer');

        this.map.setCollisionBetween(1, 2000, true, 'blockedLayer');

        this.backgroundlayer.resizeWorld();

        this.player = this.game.add.sprite(40, 40, 'player');
        this.game.physics.arcade.enable(this.player);

        this.game.camera.follow(this.player);


        this.cursors = this.game.input.keyboard.createCursorKeys();

        text = this.add.text(20, 15, 'Life:' + lives, {
            fontSize: '10px',
            fill: '#ffffff'
        });
        alert('You must escape the lava pit!')
    },

    update: function() {


        if (this.player.body.x >= 270 && this.player.body.y >= 270) {

            console.log('nice');
            lives = 100;
            alert("You escaped!");
            this.state.start('Game');

        }
        this.game.physics.arcade.collide(this.player, this.blockedLayer, this.hit, null, this);


        this.player.body.velocity.x = 0;

        if (this.cursors.up.isDown) {
            if (this.player.body.velocity.y == 0)
                this.player.body.velocity.y -= 50;
        } else if (this.cursors.down.isDown) {
            if (this.player.body.velocity.y == 0)
                this.player.body.velocity.y += 50;
        } else {
            this.player.body.velocity.y = 0;
        }
        if (this.cursors.left.isDown) {
            this.player.body.velocity.x -= 50;
        } else if (this.cursors.right.isDown) {
            this.player.body.velocity.x += 50;
        }
    },
    hit: function(player, blockedLayer) {
        console.log('hit!');
        lives -= 1;
        text.setText('Life:' + lives);
        if (lives == 0) {
            lives = 100;
            alert("You died!");
            this.state.start('Game');


        }
    }
};