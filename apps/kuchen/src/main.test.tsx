import '@testing-library/jest-dom';
import * as React from 'react';

const mockRender = jest.fn();
const mockCreateRoot = jest.fn(() => ({
  render: mockRender,
}));

jest.mock('@kuchen/ui-framework', () => ({
  GameProvider: ({ children }: { children: React.ReactNode }) => <div data-testid="game-provider">{children}</div>,
  GameWrapper: ({ children }: { children: React.ReactNode }) => <div data-testid="game-wrapper">{children}</div>,
  ScreenProvider: () => <div data-testid="screen-provider" />,
}));

jest.mock('react-dom/client', () => ({
  createRoot: mockCreateRoot,
}));

describe('Main Application', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    container.id = 'root';
    document.body.appendChild(container);
    jest.clearAllMocks();
    jest.resetModules();
  });

  afterEach(() => {
    if (document.body.contains(container)) {
      document.body.removeChild(container);
    }
  });

  it('should render without crashing', async () => {
    await import('./main');
    expect(mockCreateRoot).toHaveBeenCalledWith(container);
    expect(mockRender).toHaveBeenCalledWith(
      expect.objectContaining({
        props: expect.objectContaining({
          children: expect.any(Object),
        }),
      }),
    );
  });

  it('should throw error when root element is not found', async () => {
    document.body.removeChild(container);
    await expect(import('./main')).rejects.toThrow('Root element not found');
  });
});
