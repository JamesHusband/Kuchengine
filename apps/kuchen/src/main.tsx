import { createRoot } from 'react-dom/client';
import { AppShell } from '@kuchen/gui';

const container = document.getElementById('root');
if (!container) throw new Error('Missing #root');
createRoot(container).render(<AppShell />);
