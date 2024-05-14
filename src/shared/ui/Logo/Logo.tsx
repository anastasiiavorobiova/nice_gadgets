import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IconMap, LogoTheme } from './IconMap';
import * as cls from './Logo.module.scss';

interface LogoProps {
	theme?: LogoTheme;
}

export const Logo: FC<LogoProps> = ({ theme = LogoTheme.LIGHT }) => {
	const Icon = IconMap[theme];

	return (
		<Link to="/" className={cls.Logo} data-testid="logo">
			<Icon />
		</Link>
	);
};

export default Logo;
