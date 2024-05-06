import { classNames } from '@/shared/lib/classNames/classNames';
import { FC } from 'react';
import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import { useTranslation } from 'react-i18next';
import * as cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcher {
	className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcher> = ({ className }) => {
	const { theme, changeTheme } = useTheme();
	const { t: translate } = useTranslation();

	const setNewTheme = (event: React.ChangeEvent<HTMLSelectElement>) => {
		changeTheme(event.target.value as Theme);
	};

	return (
		<div className={classNames(cls.ThemeSwitcher, {}, [className])}>
			<select name="theme" id="theme" onChange={setNewTheme} value={theme}>
				<option value={Theme.ORIGINAL}>{translate('original')}</option>
				<option value={Theme.DARK}>{translate('dark')}</option>
				<option value={Theme.BLUE}>{translate('blue')}</option>
				<option value={Theme.ORANGE}>{translate('orange')}</option>
				<option value={Theme.PURPLE}>{translate('purple')}</option>
			</select>
		</div>
	);
};

export default ThemeSwitcher;
