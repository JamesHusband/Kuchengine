let mockRender: jest.Mock;
let mockCreateRoot: jest.Mock;

jest.mock('react-dom/client', () => {
  mockRender = jest.fn();
  mockCreateRoot = jest.fn(() => ({ render: mockRender }));
  return { createRoot: mockCreateRoot };
});

jest.mock('@kuchen/ui-framework', () => ({
  UiShell: () => <div data-testid="mock-ui-shell">Mocked UI Shell</div>,
}));

beforeEach(() => {
  jest.resetModules();
  document.body.innerHTML = '';
});

describe('main.tsx', () => {
  it('renders into root', async () => {
    const root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);

    await import('./main');

    expect(mockCreateRoot).toHaveBeenCalledWith(root);
    expect(mockRender).toHaveBeenCalledWith(expect.anything());
  });

  it('throws if root is not found', async () => {
    await expect(import('./main')).rejects.toThrow('Root element not found');
  });
});
