import Phaser from 'phaser';

export default class mapscene extends Phaser.Scene
{
    constructor()
    {
        super('mapscene')
    }

    preload()
    {
        
    }

    create()
    {
        this.add.image(0, 0, 'tiles')
    }
}
