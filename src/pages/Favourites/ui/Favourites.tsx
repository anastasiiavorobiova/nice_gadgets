import { useTranslation } from 'react-i18next';

const Favourites = () => {
	const { t: translate } = useTranslation('favourites');
	return (
		<main>
			<h1>{translate('favourites')}</h1>
		</main>
	);
};

export default Favourites;
