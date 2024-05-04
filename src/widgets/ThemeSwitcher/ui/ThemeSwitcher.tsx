import { classNames } from '@/shared/lib/classNames/classNames';
import { FC } from 'react';
import { Theme, useTheme } from '@/app/providers/ThemeProvider';

import * as cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcher {
	className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcher> = ({ className }) => {
	const { theme, changeTheme } = useTheme();

	const setNewTheme = (event: React.ChangeEvent<HTMLSelectElement>) => {
		changeTheme(event.target.value as Theme);
	};

	return (
		<select
			name="theme"
			id="theme"
			onChange={setNewTheme}
			value={theme}
			className={classNames(cls.ThemeSwitcher, {}, [className])}
		>
			<option value={Theme.ORIGINAL}>Original</option>
			<option value={Theme.DARK}>Dark</option>
			<option value={Theme.BLUE}>Blue</option>
			<option value={Theme.ORANGE}>Orange</option>
			<option value={Theme.PURPLE}>Purple</option>
		</select>
	);
};

export default ThemeSwitcher;
