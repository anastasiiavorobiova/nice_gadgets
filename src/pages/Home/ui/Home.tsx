import { useTranslation } from 'react-i18next';

const Home = () => {
	const { t: translate } = useTranslation('home');

	return (
		<main>
			<h1>{translate('welcome')}</h1>
		</main>
	);
};

export default Home;
