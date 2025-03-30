import { goToScene } from '../../../../systems/scene';
import { Button } from '../../../elements/Button/Button';

export const MainMenu = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black/80 text-white space-y-4">
      <h1 className="text-4xl font-bold">Kuchen</h1>
      <Button onClick={() => goToScene('GameScene')}>Start Game</Button>
    </div>
  );
};
