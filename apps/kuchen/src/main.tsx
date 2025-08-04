import { createRoot } from 'react-dom/client';
import { AppShell } from './AppShell';

const container = document.getElementById('root');
if (!container) throw new Error('Missing #root');
createRoot(container).render(<AppShell />);
