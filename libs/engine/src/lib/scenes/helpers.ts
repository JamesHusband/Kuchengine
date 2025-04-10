import Phaser from 'phaser';

export const createScene = (
  key: string,
  render: (scene: Phaser.Scene) => void
): Phaser.Scene => {
  const scene = new Phaser.Scene(key) as Phaser.Scene & { create?: () => void };

  scene.create = function () {
    render(this);
  };

  return scene;
};