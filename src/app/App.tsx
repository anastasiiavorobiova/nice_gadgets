import { AppRouter } from './providers/router';
import { useTheme, Theme } from '@/app/providers/ThemeProvider';
import { Navbar } from '@/widgets/Navbar';
import { classNames } from '@/shared/lib/classNames/classNames';

import './styles/index.scss';

export const App = () => {
	const { theme, changeTheme } = useTheme();

	const setNewTheme = (event: React.ChangeEvent<HTMLSelectElement>) => {
		changeTheme(event.target.value as Theme);
	};

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar />
			<select name="theme" id="theme" onChange={setNewTheme} value={theme}>
				<option value={Theme.ORIGINAL}>Original</option>
				<option value={Theme.DARK}>Dark</option>
				<option value={Theme.BLUE}>Blue</option>
				<option value={Theme.ORANGE}>Orange</option>
				<option value={Theme.PURPLE}>Purple</option>
			</select>
			<AppRouter />
		</div>
	);
};

export default App;
