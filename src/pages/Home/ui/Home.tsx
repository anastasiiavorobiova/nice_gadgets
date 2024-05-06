import { useTranslation } from 'react-i18next';

const Home = () => {
	const { t: translate } = useTranslation('home');

	return (
		<div>
			<h1>{translate('welcome')}</h1>
		</div>
	);
};

export default Home;
