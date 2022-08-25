import Phaser from 'phaser'
import preloader from './Scenes/preloader'
import mapscene from './Scenes/mapscene'

const config = {
    type: Phaser.AUTO, 
    width: 800, 
    height: 600, 
    scene: [preloader, mapscene]         
    
  };