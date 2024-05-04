import { classNames } from '@/shared/lib/classNames/classNames';
import { FC } from 'react';
import AppLink, { AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import Logo, { LogoTheme } from '@/shared/ui/Logo/Logo';
import { useTheme, Theme } from '@/app/providers/ThemeProvider';
import CartIcon from '@/shared/assets/icons/Cart.svg';
import CartIconDark from '@/shared/assets/icons/Cart-dark.svg';
import FavouritesIcon from '@/shared/assets/icons/Favourites.svg';
import FavouritesIconDark from '@/shared/assets/icons/Favourites-dark.svg';
import * as cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	const { theme } = useTheme();

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			{theme === Theme.DARK ? <Logo theme={LogoTheme.DARK} /> : <Logo />}

			<nav className={cls.NavLinks}>
				<div className={cls.Shop}>
					<AppLink to={'/'}>Home</AppLink>
					<AppLink to={'/category'}>Category</AppLink>
				</div>
				<div>
					<AppLink to={'/cart'} theme={AppLinkTheme.ICON}>
						{theme === Theme.DARK ? <CartIconDark /> : <CartIcon />}
					</AppLink>
					<AppLink to={'/favourites'} theme={AppLinkTheme.ICON}>
						{theme === Theme.DARK ? <FavouritesIconDark /> : <FavouritesIcon />}
					</AppLink>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
