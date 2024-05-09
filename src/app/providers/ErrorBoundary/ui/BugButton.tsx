import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import Button, { ThemeButton } from '@/shared/ui/Button/Button';

interface BugButtonProps {
	className?: string;
}

// FOR TEST COMPONENT

export const BugButton: FC<BugButtonProps> = (props) => {
	const { className } = props;
	const { t: translate } = useTranslation();
	const [error, setError] = useState(false);

	const onThrow = () => {
		setError(true);
	};

	useEffect(() => {
		if (error) {
			throw new Error('TEST ERROR!');
		}
	}, [error]);

	return (
		<Button
			className={classNames('', {}, [className])}
			theme={ThemeButton.PRIMARY}
			onClick={onThrow}
		>
			{translate('Bug')}
		</Button>
	);
};

export default BugButton;
