import { gameEvents } from '@kuchen/engine';

export const HUD = () => {
  const handleReturn = () => {
    gameEvents.emit('scene-change', 'MainMenuScene');
  };

  return (
    <div className="p-2 flex items-center justify-end w-full">
      <button onClick={handleReturn} className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow">
        Return to Menu
      </button>
    </div>
  );
};
