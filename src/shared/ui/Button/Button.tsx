import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import * as cls from './Button.module.scss';

export enum ThemeButton {
	PRIMARY = 'primary',
	UNSTYLED = 'unstyled',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
	const {
		className,
		children,
		theme = ThemeButton.UNSTYLED,
		...otherProps
	} = props;

	return (
		<button
			className={classNames(cls.Button, {}, [cls[theme], className])}
			data-testid="button"
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default Button;
