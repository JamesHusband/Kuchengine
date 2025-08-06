import { eventBus } from '@kuchen/engine';

export const Hud = () => {
  return (
    <div className="w-full flex flex-col items-center z-40 mt-4 pointer-events-none">
      <div className="w-full flex flex-row justify-center items-end px-6">
        <div className="flex gap-2 pointer-events-auto">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
            onClick={() => eventBus.emit('jump')}
          >
            Jump
          </button>
        </div>
      </div>
    </div>
  );
};
