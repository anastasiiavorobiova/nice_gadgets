import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import * as cls from './Loader.module.scss';

interface LoaderProps {
	className?: string;
}

export const Loader: FC<LoaderProps> = (props) => {
	const { className } = props;

	return (
		<div className={classNames(cls.Loader, {}, [className])}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

export default Loader;
