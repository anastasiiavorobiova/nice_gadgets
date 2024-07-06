import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
	const svgLoader = buildSvgLoader();

	const fileLoader = {
		test: /\.(png|jpe?g|gif|eot|ttf|woff2?)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	};

	const cssLoader = buildCssLoader(isDev);

	const babelLoader = {
		test: /\.(js|jsx|tsx?)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
			},
		},
	};

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	return [svgLoader, fileLoader, babelLoader, typescriptLoader, cssLoader];
}

export default buildLoaders;
