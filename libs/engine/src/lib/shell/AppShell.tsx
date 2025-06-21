import { useRef } from 'react';
import { GameCanvas, AppLayout } from '@kuchen/gui';
import { useGameInit } from '../runtime/lib/useGameInit';
import { useSceneKey } from '../events/lib/hooks/useSceneKey';
import { MainMenu } from '@kuchen/gui';

export const AppShell = () => {
  const gameRef = useRef<HTMLDivElement>(null);
  useGameInit(gameRef);

  const sceneKey = useSceneKey();
  const showGui = sceneKey === 'MainMenu' || sceneKey === 'Game';
  return (
    <AppLayout>
      <GameCanvas gameRef={gameRef} />
      {showGui && <MainMenu />}
    </AppLayout>
  );
};
