import { classNames } from '@/shared/lib/classNames/classNames';
import { FC } from 'react';
import AppLink from '@/shared/ui/AppLink/AppLink';
import * as cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<AppLink to={'/'}>Home</AppLink>
			<AppLink to={'/cart'}>Cart</AppLink>
			<AppLink to={'/favourites'}>Favourites</AppLink>
		</div>
	);
};

export default Navbar;
