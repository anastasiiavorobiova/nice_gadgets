import { Suspense, useContext, useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { CartLazy } from './pages/Cart/CartLazy';
import { FavouritesLazy } from './pages/Favourites/FavouritesLazy';
import { HomeLazy } from './pages/Home/HomeLazy';
import { useTheme } from './theme/useTheme';
import { Theme } from './theme/ThemeContext';

import './styles/index.scss';

export const App = () => {
	const { theme, changeTheme } = useTheme();

	const setNewTheme = (event: React.ChangeEvent<HTMLSelectElement>) => {
		changeTheme(event.target.value as Theme);
	};

	return (
		<div className={`app ${theme}`}>
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
					<Route path="/cart" element={<CartLazy />} />
					<Route path="/favourites" element={<FavouritesLazy />} />
					<Route path="/" element={<HomeLazy />} />
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
