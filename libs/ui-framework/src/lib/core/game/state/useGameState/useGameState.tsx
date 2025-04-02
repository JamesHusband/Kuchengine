import { useState } from 'react';
import { useSceneListener } from '../../../scene/hooks';
export const useGameState = () => {
  const [currentScene, setCurrentScene] = useState('MainMenuScene');
  useSceneListener(setCurrentScene);
  return { currentScene };
};
