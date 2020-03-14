var TopDownGame = TopDownGame || {};

//loading the game assets
TopDownGame.Preload = function() {};

TopDownGame.Preload.prototype = {
    preload: function() {
        //show loading screen

        //load game assets
        this.load.tilemap('level1', 'assets/map/level1.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('gameTiles', 'assets/images/tiles.png');
        this.load.image('greencup', 'assets/images/greencup.png');
        this.load.image('player', 'assets/images/player.png');
        this.load.image('browndoor', 'assets/images/browndoor.png');
        //this.load.image('browndoor', 'assets/images/browndoor.png');

    },
    create: function() {
        this.state.start('Game');
    }
};