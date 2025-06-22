import { useState, useEffect } from 'react';
import { useSceneKey } from '@kuchen/engine';
import { MainMenu, PauseMenu } from '../menus';
import { Hud } from '../hud';

export const GuiProvider = () => {
  const sceneKey = useSceneKey();
  const [showPauseMenu, setShowPauseMenu] = useState(false);

  useEffect(() => {
    if (sceneKey !== 'Game') {
      setShowPauseMenu(false);
      return;
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowPauseMenu((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [sceneKey]);

  let content = null;
  if (sceneKey === 'MainMenu') {
    content = <MainMenu />;
  } else if (sceneKey === 'Game') {
    content = showPauseMenu ? <PauseMenu /> : <Hud />;
  }

  return content;
};
