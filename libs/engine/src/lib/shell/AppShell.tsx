import { useRef } from 'react';
import { useGameInstance, eventBus } from '@kuchen/engine';
import { GameCanvas, AppLayout, GuiLayout } from '@kuchen/gui';

export const AppShell = () => {
  const gameRef = useRef<HTMLDivElement>(null);

  useGameInstance(gameRef);

  return (
    <AppLayout>
      <GameCanvas gameRef={gameRef} />
      <GuiLayout>
        <button
          style={{
            color: 'white',
            background: '#444',
            border: 'none',
            padding: '8px',
            marginRight: '8px',
            cursor: 'pointer',
          }}
          onClick={() => eventBus.emit('scene-change', 'MainMenu')}
        >
          Go to Menu
        </button>
        <button
          style={{
            color: 'white',
            background: '#444',
            border: 'none',
            padding: '8px',
            cursor: 'pointer',
          }}
          onClick={() => eventBus.emit('scene-change', 'Game')}
        >
          Start Game
        </button>
      </GuiLayout>
    </AppLayout>
  );
};
