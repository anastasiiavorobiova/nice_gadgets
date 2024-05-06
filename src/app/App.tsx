import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { AppRouter } from './providers/router';
import { useTheme } from '@/app/providers/ThemeProvider';
import { Navbar } from '@/widgets/Navbar';
import Button, { ThemeButton } from '@/shared/ui/Button/Button';
import { classNames } from '@/shared/lib/classNames/classNames';

import './styles/index.scss';

export const App = () => {
	const { theme } = useTheme();
	const { t: translate } = useTranslation();

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback="">
				<Navbar />
				<div className="content-page">
					<AppRouter />
				</div>

				<br />
				<br />

				<Button theme={ThemeButton.PRIMARY}>{translate('test')}</Button>

				<br />
				<br />
			</Suspense>
		</div>
	);
};

export default App;
