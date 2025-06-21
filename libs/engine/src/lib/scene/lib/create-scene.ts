import Phaser from 'phaser';
import { eventBus } from '../../events';

interface CustomScene extends Phaser.Scene {
  create?: () => void;
}

export const createScene = (key: string, render: (scene: Phaser.Scene) => void): Phaser.Scene => {
  const scene = new Phaser.Scene(key) as CustomScene;

  scene.create = () => {
    eventBus.emit('scene-started', key);
    render(scene);
  };

  return scene;
};
