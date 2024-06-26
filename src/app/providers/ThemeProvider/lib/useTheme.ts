import { useContext } from 'react';
import { Theme, ThemeContext } from './ThemeContext';
import { themeStorage } from '@/shared/lib/localStorage/localStorage';

interface UseThemeResult {
	changeTheme: (theme: Theme) => void;
	theme: Theme;
}

export function useTheme(): UseThemeResult {
	const { theme, setTheme } = useContext(ThemeContext);

	const changeTheme = (newTheme: Theme) => {
		if (theme !== newTheme && Object.values(Theme).includes(newTheme)) {
			setTheme(newTheme);
			themeStorage.set(newTheme);
		}
	};

	return {
		theme,
		changeTheme,
	};
}
