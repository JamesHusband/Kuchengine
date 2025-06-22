import { Button } from '../../components';
import { eventBus } from '@kuchen/engine';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

export const PauseMenu = ({ onResume }: { onResume?: () => void }) => {
  const handleResume = onResume || noop;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-10 rounded-2xl shadow-2xl flex flex-col gap-4 min-w-[300px] items-center">
        <Button onClick={handleResume}>Resume</Button>
        <Button onClick={() => alert('Options coming soon!')}>Options</Button>
        <Button onClick={() => eventBus.emit('scene-change', 'MainMenu')}>Main Menu</Button>
      </div>
    </div>
  );
};
