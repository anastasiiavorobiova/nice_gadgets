import { classNames } from '@/shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import AppLink from '@/shared/ui/AppLink/AppLink';
import Logo, { LogoTheme } from '@/shared/ui/Logo/Logo';
import { useTheme, Theme } from '@/app/providers/ThemeProvider';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { LanguageSwitcher } from '@/widgets/LanguageSwitcher';
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
	const { t: translate } = useTranslation();

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			{theme === Theme.DARK ? <Logo theme={LogoTheme.DARK} /> : <Logo />}

			<nav className={cls.NavLinks}>
				<div className={cls.Shop}>
					<AppLink to={'/'}>{translate('navigation.home')}</AppLink>
					<AppLink to={'/category'}>{translate('navigation.category')}</AppLink>
				</div>
				<div className={cls.Main}>
					{/* <MenuIcon/> */}
					<div className={cls.border}>
						<LanguageSwitcher className={cls.icon} />
					</div>
					<div className={cls.border}>
						<ThemeSwitcher className={cls.icon} />
					</div>

					<div className={cls.border}>
						<AppLink to={'/cart'} className={cls.icon}>
							{theme === Theme.DARK ? <CartIconDark /> : <CartIcon />}
						</AppLink>
					</div>

					<div className={cls.border}>
						<AppLink to={'/favourites'} className={cls.icon}>
							{theme === Theme.DARK ? (
								<FavouritesIconDark />
							) : (
								<FavouritesIcon />
							)}
						</AppLink>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
