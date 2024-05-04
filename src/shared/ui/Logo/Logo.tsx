import { FC } from 'react';
import { Link } from 'react-router-dom';
import LogoIconLight from '@/shared/assets/icons/Logo.svg';
import LogoIconDark from '@/shared/assets/icons/Logo-dark.svg';

import * as cls from './Logo.module.scss';

export enum LogoTheme {
	LIGHT = 'light',
	DARK = 'dark',
}

interface LogoProps {
	theme?: LogoTheme;
}

const Logo: FC<LogoProps> = ({ theme = LogoTheme.LIGHT }) => {
	return (
		<Link to="/" className={cls.Logo}>
			{theme === LogoTheme.LIGHT ? <LogoIconLight /> : <LogoIconDark />}
		</Link>
	);
};

export default Logo;
