import { destroyInstance, getInstance } from '../index';

export const shutdownInstance = () => {
  const game = getInstance();
  if (!game) return;

  destroyInstance();
};
