import { SVGProps } from 'react';
import LogoIconLight from '@/shared/assets/icons/Logo.svg';
import LogoIconDark from '@/shared/assets/icons/Logo-dark.svg';

export enum LogoTheme {
	LIGHT = 'light',
	DARK = 'dark',
}

export const IconMap: Record<LogoTheme, React.FC<SVGProps<SVGSVGElement>>> = {
	[LogoTheme.LIGHT]: LogoIconLight,
	[LogoTheme.DARK]: LogoIconDark,
};
