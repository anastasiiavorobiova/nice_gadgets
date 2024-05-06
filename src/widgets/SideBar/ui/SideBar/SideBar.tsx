import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import AppLink from '@/shared/ui/AppLink/AppLink';
import * as cls from './SideBar.module.scss';

interface SideBarProps {
	className?: string;
}

export const SideBar: FC<SideBarProps> = ({ className }) => {
	const [collapsed] = useState(false);
	const { t: translate } = useTranslation();

	return (
		<aside
			className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [
				className,
			])}
		>
			<AppLink to={'/'} className={cls.navLink}>
				{translate('navigation.home')}
			</AppLink>
			<AppLink to={'/category'} className={cls.navLink}>
				{translate('navigation.category')}
			</AppLink>
		</aside>
	);
};

export default SideBar;
