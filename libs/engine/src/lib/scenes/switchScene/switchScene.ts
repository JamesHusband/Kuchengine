export const switchScene = (current: Phaser.Scene, target: string) => {
  if (current?.scene.isActive()) {
    current.scene.stop();
  }
  current.scene.start(target);
};
