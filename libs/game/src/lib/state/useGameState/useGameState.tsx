import { useState } from 'react';
import { useSceneListener } from '@kuchen/scenes';
export const useGameState = () => {
  const [currentScene, setCurrentScene] = useState('MainMenuScene');
  useSceneListener(setCurrentScene);
  return { currentScene };
};
