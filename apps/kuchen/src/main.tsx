import { createRoot } from 'react-dom/client';
import { App } from '@kuchen/ui';

const container = document.getElementById('root');
if (!container) throw new Error('Missing #ui-overlay');
createRoot(container).render(<App />);