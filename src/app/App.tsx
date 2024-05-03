import { Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { CartPage, FavouritesPage, HomePage } from '@/pages';
import { useTheme, Theme } from '@/app/providers/ThemeProvider';
import { classNames } from '@/shared/lib/classNames/classNames';

import './styles/index.scss';

export const App = () => {
	const { theme, changeTheme } = useTheme();

	const setNewTheme = (event: React.ChangeEvent<HTMLSelectElement>) => {
		changeTheme(event.target.value as Theme);
	};

	return (
		<div className={classNames('app', {}, [theme])}>
			<div>
				<Link to={'/'}>Home</Link>
				<Link to={'/cart'}>Cart</Link>
				<Link to={'/favourites'}>Favourites</Link>
			</div>
			<select name="theme" id="theme" onChange={setNewTheme} value={theme}>
				<option value={Theme.ORIGINAL}>Original</option>
				<option value={Theme.DARK}>Dark</option>
				<option value={Theme.BLUE}>Blue</option>
				<option value={Theme.ORANGE}>Orange</option>
				<option value={Theme.PURPLE}>Purple</option>
			</select>
			<Suspense fallback={<div>Loading..</div>}>
				<Routes>
					<Route path="/cart" element={<CartPage />} />
					<Route path="/favourites" element={<FavouritesPage />} />
					<Route path="/" element={<HomePage />} />
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
