import { Instance } from './setInstance';

export const destroyInstance = () => {
  Instance?.destroy(true);
};
