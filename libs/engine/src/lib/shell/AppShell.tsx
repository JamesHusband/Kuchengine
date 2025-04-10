import { useRef } from 'react';
import { useGameInstance, eventBus } from '@kuchen/engine';
import { Layout } from '@kuchen/gui';

export const AppShell = () => {
  const gameRef = useRef<HTMLDivElement>(null);

  useGameInstance(gameRef);

  return (
    <Layout>
      <div ref={gameRef} style={{ width: '100%', height: '100%' }} />
      <div
        style={{
          position: 'absolute',
          top: 10,
          left: 10,
          zIndex: 10,
        }}
      >
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
      </div>
    </Layout>
  );
};
