import { handleSceneChange } from './sceneChange.js';
import { gameEvents } from '../../bus/eventBus.js';

jest.mock('../../bus/eventBus.js', () => ({
  gameEvents: {
    on: jest.fn(),
  },
}));

describe('handleSceneChange', () => {
  let sceneManagerMock: any;
  let currentSceneMock: any;

  beforeEach(() => {
    jest.clearAllMocks();

    currentSceneMock = {
      scene: {
        isActive: jest.fn(() => true),
        stop: jest.fn(),
      },
    };

    sceneManagerMock = {
      getScenes: jest.fn(() => [currentSceneMock]),
      start: jest.fn(),
    };
  });

  it('registers a scene-change event listener', () => {
    handleSceneChange(sceneManagerMock);
    expect(gameEvents.on).toHaveBeenCalledWith('scene-change', expect.any(Function));
  });

  it('stops current scene and starts target scene on event', () => {
    handleSceneChange(sceneManagerMock);

    const callback = (gameEvents.on as jest.Mock).mock.calls[0][1];
    callback('NextScene');

    expect(sceneManagerMock.getScenes).toHaveBeenCalled();
    expect(currentSceneMock.scene.isActive).toHaveBeenCalled();
    expect(currentSceneMock.scene.stop).toHaveBeenCalled();
    expect(sceneManagerMock.start).toHaveBeenCalledWith('NextScene');
  });

  it('does not stop scene if not active', () => {
    currentSceneMock.scene.isActive.mockReturnValue(false);

    handleSceneChange(sceneManagerMock);

    const callback = (gameEvents.on as jest.Mock).mock.calls[0][1];
    callback('NextScene');

    expect(currentSceneMock.scene.stop).not.toHaveBeenCalled();
    expect(sceneManagerMock.start).toHaveBeenCalledWith('NextScene');
  });
});
