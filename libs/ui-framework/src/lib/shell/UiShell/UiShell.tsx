import { GameCanvas } from '../../components';

export const UiShell = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Welcome</h1>
      <GameCanvas />
    </div>
  );
};
