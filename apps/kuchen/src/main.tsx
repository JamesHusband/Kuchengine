import { createRoot } from 'react-dom/client';
import { UiShell } from '@kuchen/ui-framework';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');
createRoot(rootElement).render(<UiShell />);
