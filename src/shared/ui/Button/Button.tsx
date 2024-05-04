import { ButtonHTMLAttributes, FC } from 'react';
import * as cls from './Button.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export enum ThemeButton {
	TEXT = 'text',
	PRIMARY = 'primary',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ThemeButton;
}

const Button: FC<ButtonProps> = (props) => {
	const {
		className,
		children,
		theme = ThemeButton.PRIMARY,
		...otherProps
	} = props;

	return (
		<button
			className={classNames(cls.Button, {}, [cls[theme], className])}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default Button;
