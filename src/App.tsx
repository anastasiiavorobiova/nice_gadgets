import { Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { CartLazy } from './pages/Cart/CartLazy';
import { FavouritesLazy } from './pages/Favourites/FavouritesLazy';
import { HomeLazy } from './pages/Home/HomeLazy';

import './index.scss';

export const App = () => {
	return (
		<div className="app">
			<div>
				<Link to={'/'}>Home</Link>
				<Link to={'/cart'}>Cart</Link>
				<Link to={'/favourites'}>Favourites</Link>
			</div>
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
