import Phaser from 'phaser';

export default class preloader extends Phaser.Scene
{
    constructor()
    {
        super('mapscene')
    }
    
    preload()
    {
        this.load.image('tiles','src/assets/Master tile.png');
        this.load.tilemapTiledJSON('map', 'src/assets/maptest.json') 
    }       
    

    create()
    {
        this.scene.start('game')        
    }
}

