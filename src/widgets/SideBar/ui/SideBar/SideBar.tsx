import { FC, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import * as cls from './SideBar.module.scss';

interface SideBarProps {
	className?: string;
}

export const SideBar: FC<SideBarProps> = ({ className }) => {
	const [collapsed] = useState(false);

	return (
		<div
			className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [
				className,
			])}
		>
			SideBar
			<br />
			<br />
		</div>
	);
};

export default SideBar;
