import { createRoot } from 'react-dom/client';
import { App } from './App';

export const mountUI = (): void => {
  const container = document.getElementById('root');
  if (!container) throw new Error('Missing #ui-overlay');
  createRoot(container).render(<App />);
};