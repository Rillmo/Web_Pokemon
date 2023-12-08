
var imgSize = 16;
var width = window.innerWidth;
var height = window.innerHeight;

var config = {
    type: Phaser.AUTO,
    width: width,
    height: height,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var platforms;

function preload ()
{
    this.load.image('ground', 'tile000.png');
}

function create ()
{
    for (let i=0; i<=height; i+=imgSize){
        for (let j=0; j<=width; j+=imgSize)
            this.add.image(j, i, 'ground').setOrigin(0, 0);
    }
}

function update ()
{
}