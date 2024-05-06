import { useTranslation } from 'react-i18next';

const Favourites = () => {
	const { t: translate } = useTranslation('favourites');
	return (
		<div>
			<h1>{translate('favourites')}</h1>
		</div>
	);
};

export default Favourites;
