import { FC } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import * as cls from './AppLink.module.scss';

interface AppLinkProps extends NavLinkProps {
	className?: string;
}

const getActiveLink = (className: string) => {
	return ({ isActive }: { isActive: boolean }) => {
		return classNames(
			cls.AppLink,
			{
				[cls.active]: isActive,
			},
			[className]
		);
	};
};

export const AppLink: FC<AppLinkProps> = ({
	className,
	children,
	to,
	...otherProps
}) => {
	return (
		<NavLink to={to} className={getActiveLink(className)} {...otherProps}>
			{children}
		</NavLink>
	);
};

export default AppLink;
