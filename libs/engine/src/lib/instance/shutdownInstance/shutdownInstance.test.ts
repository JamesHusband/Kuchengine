import { shutdownInstance } from './shutdownInstance.js';
import { destroyInstance, getInstance } from '../index.js';

jest.mock('../index.js', () => ({
  destroyInstance: jest.fn(),
  getInstance: jest.fn(),
}));

describe('destroyInstance', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should destroy the instance when it exists', () => {
    (getInstance as jest.Mock).mockReturnValue({});
    shutdownInstance();
    expect(destroyInstance).toHaveBeenCalled();
  });

  it('should not destroy the instance when it does not exist', () => {
    (getInstance as jest.Mock).mockReturnValue(null);
    shutdownInstance();
    expect(destroyInstance).not.toHaveBeenCalled();
  });
});
