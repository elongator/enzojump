import Phaser from 'phaser';

import PlayScene from './PlayScene';
import PreloadScene from './PreloadScene';

const config = {
    type: Phaser.AUTO,
    pixelArt: true,
    transparent: true,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scale: {
        parent: 'game',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        mode: Phaser.Scale.FIT,
        width: 1000,
        height: 340
    },
    scene: [PreloadScene, PlayScene]
};

new Phaser.Game(config);