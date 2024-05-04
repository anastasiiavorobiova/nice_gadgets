import { FC } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import * as cls from './AppLink.module.scss';

export enum AppLinkTheme {
	TEXT = 'text',
	ICON = 'icon',
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
	theme = AppLinkTheme.TEXT,
	children,
	to,
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
