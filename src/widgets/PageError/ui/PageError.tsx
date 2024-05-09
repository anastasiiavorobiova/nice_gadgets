import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import Button, { ThemeButton } from '@/shared/ui/Button/Button';
import * as cls from './PageError.module.scss';

interface PageErrorProps {
	className?: string;
}

export const PageError: FC<PageErrorProps> = (props) => {
	const { className } = props;
	const { t: translate } = useTranslation();

	const reloadPage = () => {
		location.reload();
	};

	return (
		<div className={classNames(cls.PageError, {}, [className])}>
			<p className={cls.message}>{translate('Oops! Something went wrong!')}</p>
			<Button theme={ThemeButton.PRIMARY} onClick={reloadPage}>
				{translate('Reload the page')}
			</Button>
		</div>
	);
};

export default PageError;
