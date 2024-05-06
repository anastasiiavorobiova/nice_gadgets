import { FC } from 'react';
import Button from '@/shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import * as cls from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
	className?: string;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className }) => {
	const { t: translate, i18n } = useTranslation();

	const toggleLanguage = () => {
		i18n.changeLanguage(i18n.language === 'ua' ? 'en' : 'ua');
	};

	return (
		<Button
			onClick={toggleLanguage}
			className={classNames(cls.LanguageSwitcher, {}, [className])}
		>
			{translate('lang')}
		</Button>
	);
};

export default LanguageSwitcher;
