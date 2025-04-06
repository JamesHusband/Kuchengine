import { createRoot } from 'react-dom/client';
import { AppShell } from '@kuchen/gui';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');
createRoot(rootElement).render(<AppShell />);
