import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@/shared/config/i18n/i18n';
import { ThemeProvider } from './app/providers/ThemeProvider';
import { PageError } from './widgets/PageError';
import { ErrorBoundary } from './app/providers/ErrorBoundary';
import App from './app/App';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<BrowserRouter>
		<ErrorBoundary fallback={<PageError />}>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</ErrorBoundary>
	</BrowserRouter>
);
