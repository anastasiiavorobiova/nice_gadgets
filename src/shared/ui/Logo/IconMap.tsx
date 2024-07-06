import { SVGProps } from 'react';
import { ReactComponent as LogoIconLight } from '@/shared/assets/icons/Logo.svg';
import { ReactComponent as LogoIconDark } from '@/shared/assets/icons/Logo-dark.svg';
import { ReactComponent as LogoIconPink } from '@/shared/assets/icons/Logo-pink.svg';

export enum LogoTheme {
	LIGHT = 'light',
	DARK = 'dark',
	PINK = 'pink',
}

export const IconMap: Record<LogoTheme, React.FC<SVGProps<SVGSVGElement>>> = {
	[LogoTheme.LIGHT]: LogoIconLight,
	[LogoTheme.DARK]: LogoIconDark,
	[LogoTheme.PINK]: LogoIconPink,
};
