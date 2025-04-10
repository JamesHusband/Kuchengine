import { createRoot } from 'react-dom/client';
import { App } from './App';

export const bootstrapGame = (): void => {
  const rootElement = document.getElementById('root');

  if (!rootElement) {
    throw new Error('Root element #root not found in DOM.');
  }

  createRoot(rootElement).render(<App />);
};