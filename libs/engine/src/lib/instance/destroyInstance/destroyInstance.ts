import { Instance } from '../setInstance/setInstance';

export const destroyInstance = () => {
  Instance?.destroy(true);
};
