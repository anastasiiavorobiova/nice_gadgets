import { CartPage, FavouritesPage, HomePage } from '@/pages';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
	HOME = 'home',
	FAVOURITES = 'favourites',
	CART = 'cart',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.HOME]: '/',
	[AppRoutes.FAVOURITES]: '/favourites',
	[AppRoutes.CART]: '/cart',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.HOME]: {
		path: RoutePath.home,
		element: <HomePage />,
	},
	[AppRoutes.FAVOURITES]: {
		path: RoutePath.favourites,
		element: <FavouritesPage />,
	},
	[AppRoutes.CART]: {
		path: RoutePath.cart,
		element: <CartPage />,
	},
};
