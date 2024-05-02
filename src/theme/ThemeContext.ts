import { createContext } from 'react';
import { EMPTY_FUNC } from '../utils/always';

export enum Theme {
	ORIGINAL = 'original',
	DARK = 'dark',
	BLUE = 'rounded-blue',
	ORANGE = 'rounded-orange',
	PURPLE = 'rounded-purple',
}

export interface ThemeContextProps {
	theme: Theme;
	setTheme: (newTheme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
	theme: Theme.ORIGINAL,
	setTheme: EMPTY_FUNC,
});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
