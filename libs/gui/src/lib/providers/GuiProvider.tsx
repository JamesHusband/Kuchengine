import { useState, useEffect } from 'react';
import { useSceneKey, pauseGame, resumeGame } from '@kuchen/engine';
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
        setShowPauseMenu((isPaused) => {
          if (!isPaused) {
            pauseGame();
          } else {
            resumeGame();
          }
          return !isPaused;
        });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [sceneKey]);

  if (sceneKey === 'MainMenu') {
    return <MainMenu />;
  }

  if (sceneKey === 'Game') {
    return (
      <>
        <Hud />
        {showPauseMenu && (
          <PauseMenu
            onResume={() => {
              setShowPauseMenu(false);
              resumeGame();
            }}
          />
        )}
      </>
    );
  }

  return null;
};
