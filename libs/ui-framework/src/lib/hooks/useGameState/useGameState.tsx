import { useState } from 'react';
import { useSceneListener } from '../useScene';

export const useGameState = () => {
  const [currentScene, setCurrentScene] = useState('MainMenuScene');

  console.log('currentScene', currentScene);
  useSceneListener(setCurrentScene);
  return { currentScene };
};
