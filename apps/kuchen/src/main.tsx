import { createRoot } from 'react-dom/client';
import { AppShell } from '@kuchen/engine';

const container = document.getElementById('root');
if (!container) throw new Error('Missing #ui-overlay');
createRoot(container).render(<AppShell />);
