import { createScene } from '../scenes/createScene';

export const PlaceholderScene = createScene('PlaceholderScene', {
  create(scene) {
    scene.add.text(300, 280, '🚧 Placeholder Scene', {
      fontSize: '24px',
      color: '#ffffff',
    });
  },
});

export const sceneMap = {
  PlaceholderScene,
};
