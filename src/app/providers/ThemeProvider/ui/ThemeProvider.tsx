import { FC, ReactNode, useMemo, useState } from 'react';
import { Theme, ThemeContext } from '../lib/ThemeContext';
import { themeStorage } from '@/helpers/localStorage/localStorage';

const choosenTheme = themeStorage.get() || Theme.ORIGINAL;

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [theme, setTheme] = useState<Theme>(choosenTheme);

	const defaultProps = useMemo(
		() => ({
			theme,
			setTheme,
		}),
		[theme]
	);

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
