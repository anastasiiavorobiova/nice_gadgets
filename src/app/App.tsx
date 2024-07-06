import { Suspense } from 'react';
import { AppRouter } from './providers/router';
import { useTheme } from '@/app/providers/ThemeProvider';
import { Navbar } from '@/widgets/Navbar';
import { SideBar } from '@/widgets/SideBar';
import { classNames } from '@/shared/lib/classNames/classNames';

import './styles/index.scss';

export const App = () => {
	const { theme } = useTheme();

	return (
		<div className={classNames('app container', {}, [theme])}>
			<Suspense fallback="">
				<Navbar />
				<div className="content-page">
					<AppRouter />
					<SideBar />
				</div>
				<footer></footer>
			</Suspense>
		</div>
	);
};

export default App;
