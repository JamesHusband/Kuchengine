import { useEffect, useRef } from 'react';
import Phaser from 'phaser';

// ✅ Central event bus
export const eventBus = new Phaser.Events.EventEmitter();

// ✅ Simple Scene Factory
const createScene = (
  key: string,
  render: (scene: Phaser.Scene) => void
): Phaser.Scene => {
  const scene = new Phaser.Scene(key) as Phaser.Scene & { create?: () => void };

  scene.create = function () {
    render(this);
  };

  return scene;
};

// 🎮 Game Scene
const createGameScene = () =>
  createScene('Game', (scene) => {
    scene.add.rectangle(400, 300, 100, 100, 0xff0000);
    scene.add.text(250, 450, 'Game Scene (React-driven)', {
      font: '20px Arial',
      color: '#ffffff',
    });
  });

// 🎮 Main Menu Scene
const createMainMenuScene = () =>
  createScene('MainMenu', (scene) => {
    scene.add.text(100, 100, 'Main Menu (React-driven)', {
      font: '24px Arial',
      color: '#ffffff',
    });
  });

// 🧠 Persistent game reference
let game: Phaser.Game | null = null;

// 🔁 Scene switching via global listener
const registerSceneChangeHandler = (): void => {
  eventBus.on('scene-change', (targetScene: string) => {
    if (!game) return;

    const manager = game.scene;
    const current = manager.getScenes(true)[0];

    if (current?.scene.key !== targetScene) {
      manager.stop(current.scene.key);
      manager.start(targetScene);
    }
  });
};

// ⚛️ React App Component
export const App = (): React.ReactElement => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      backgroundColor: 'red',
      parent: containerRef.current,
      scene: [createMainMenuScene(), createGameScene()],
    };

    game = new Phaser.Game(config);

    game.events.once('ready', () => {
      registerSceneChangeHandler();
      game?.scene.start('MainMenu');
    });

    return () => {
      eventBus.removeAllListeners();
      game?.destroy(true);
      game = null;
    };
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <div ref={containerRef} />
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
    </div>
  );
};
