import { FC } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import * as cls from './AppLink.module.scss';

export enum AppLinkTheme {
	ORIGINAL = 'original',
	DARK = 'dark',
	BLUE = 'rounded-blue',
	ORANGE = 'rounded-orange',
	PURPLE = 'rounded-purple',
}

interface AppLinkProps extends NavLinkProps {
	className?: string;
	theme?: AppLinkTheme;
}

const getActiveLink = (className: string, theme: string) => {
	return ({ isActive }: { isActive: boolean }) => {
		return classNames(
			cls.AppLink,
			{
				[cls.active]: isActive,
			},
			[className, cls[theme]]
		);
	};
};

export const AppLink: FC<AppLinkProps> = ({
	className,
	children,
	to,
	theme = AppLinkTheme.ORIGINAL,
	...otherProps
}) => {
	return (
		<NavLink
			to={to}
			className={getActiveLink(className, theme)}
			{...otherProps}
		>
			{children}
		</NavLink>
	);
};

export default AppLink;
