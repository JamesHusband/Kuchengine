import { useState } from 'react';
import { useSceneListener } from '../../useScene';

export const useGameState = () => {
  const [currentScene, setCurrentScene] = useState('MainMenuScene');
  useSceneListener(setCurrentScene);
  return { currentScene };
};
