import Button, { ThemeButton } from '@/shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

const Cart = () => {
	const { t: translate } = useTranslation('cart');

	return (
		<main>
			<h1>{translate('cart')}</h1>
			<Button theme={ThemeButton.PRIMARY}>{translate('checkout')}</Button>
		</main>
	);
};

export default Cart;
