import { createRoot } from 'react-dom/client';
import App from './App';
import 'vite/modulepreload-polyfill';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
