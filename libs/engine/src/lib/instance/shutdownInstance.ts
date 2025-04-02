import { destroyInstance, getInstance } from './';

export const shutdownInstance = () => {
  const game = getInstance();
  if (!game) return;

  destroyInstance();
};
