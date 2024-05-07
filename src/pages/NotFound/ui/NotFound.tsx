import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import * as cls from './NotFound.module.scss';

export const NotFound: FC = () => {
	const { t: translate } = useTranslation();

	return (
		<div className={cls.NotFoundPage}>{translate('The page is not found')}</div>
	);
};

export default NotFound;
