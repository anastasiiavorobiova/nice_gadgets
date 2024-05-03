import { Configuration } from 'webpack';
import { BuildOptions } from './types/config';
import buildLoaders from './buildLoaders';
import buildPlugins from './buildPlugins';
import buildResolvers from './buildResolvers';
import buildDevServer from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): Configuration {
	const { paths, mode, isDev } = options;

	return {
		mode,
		entry: paths.entry,
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(options),
		output: {
			filename: '[name].[contenthash].js',
			path: paths.output,
			clean: true,
		},
		plugins: buildPlugins(options),
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev ? buildDevServer(options) : undefined,
	};
}

export default buildWebpackConfig;
