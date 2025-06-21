import { createRoot } from 'react-dom/client';
import { AppShell } from '@kuchen/engine';

const container = document.getElementById('root');
if (!container) throw new Error('Missing #root');
createRoot(container).render(<AppShell />);
