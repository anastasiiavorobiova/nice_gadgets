import { CartPage, FavouritesPage, HomePage, NotFoundPage } from '@/pages';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
	HOME = 'home',
	FAVOURITES = 'favourites',
	CART = 'cart',
	NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.HOME]: '/',
	[AppRoutes.FAVOURITES]: '/favourites',
	[AppRoutes.CART]: '/cart',
	[AppRoutes.NOT_FOUND]: '*',
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
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath.not_found,
		element: <NotFoundPage />,
	},
};
