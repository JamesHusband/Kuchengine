import { createRoot } from 'react-dom/client';

jest.mock('react-dom/client', () => ({
  createRoot: jest.fn().mockReturnValue({
    render: jest.fn(),
  }),
}));

jest.mock('@kuchen/engine', () => ({
  AppShell: jest.fn(() => <div>Mock AppShell</div>),
}));

describe('main.tsx', () => {
  let container: HTMLElement;

  beforeEach(() => {
    jest.clearAllMocks();

    container = document.createElement('div');
    container.id = 'root';
    document.body.appendChild(container);
  });

  afterEach(() => {
    if (document.body.contains(container)) {
      document.body.removeChild(container);
    }
  });

  it('should throw an error when root element is missing', () => {
    document.body.removeChild(container);

    jest.isolateModules(() => {
      expect(() => {
        require('./main');
      }).toThrow('Missing #root');
    });
  });

  it('should create root and render AppShell when root element exists', () => {
    require('./main');

    expect(createRoot).toHaveBeenCalledWith(container);

    const mockRoot = createRoot(container);

    expect(mockRoot.render).toHaveBeenCalledWith(<AppShell />);
  });
});
