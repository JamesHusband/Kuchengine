import { destroyInstance } from './destroyInstance.js';
import { Instance } from '../setInstance/setInstance.js';

type MockInstance = {
  Instance: {
    destroy: jest.Mock;
  } | null;
};

jest.mock('../setInstance/setInstance', () => {
  const mockDestroy = jest.fn();
  return {
    Instance: {
      destroy: mockDestroy,
    },
  };
});

describe('destroyInstance', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call destroy on the game instance when it exists', () => {
    destroyInstance();

    const mockedInstance = Instance as unknown as { destroy: jest.Mock };
    expect(mockedInstance.destroy).toHaveBeenCalledTimes(1);
    expect(mockedInstance.destroy).toHaveBeenCalledWith(true);
  });

  it('should handle null game instance gracefully', () => {
    const mockModule = jest.requireMock('../setInstance/setInstance') as MockInstance;
    mockModule.Instance = null;

    expect(() => destroyInstance()).not.toThrow();
  });
});
