import { AppRouter } from './providers/router';
import { useTheme } from '@/app/providers/ThemeProvider';
import { Navbar } from '@/widgets/Navbar';
import Button from '@/shared/ui/Button/Button';
import { classNames } from '@/shared/lib/classNames/classNames';

import './styles/index.scss';

export const App = () => {
	const { theme } = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar />
			<div className="content-page">
				<AppRouter />
			</div>

			<br />
			<br />

			<div>
				<Button>Click me</Button>
			</div>
			<br />
			<br />
		</div>
	);
};

export default App;
