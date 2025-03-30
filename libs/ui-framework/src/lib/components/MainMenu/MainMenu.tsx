import { gameEvents } from '@kuchen/engine';

export const MainMenu = () => {
  const handleStart = () => {
    gameEvents.emit('scene-change', 'GameScene');
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black/80 text-white space-y-4">
      <h1 className="text-4xl font-bold">Kuchen</h1>
      <button onClick={handleStart} className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow">
        Start Game
      </button>
    </div>
  );
};
