import { Configuration } from 'webpack';
import { BuildMode, BuildOptions } from './types/config';
import path from 'path';
import buildLoaders from './buildLoaders';
import buildPlugins from './buildPlugins';
import buildResolvers from './buildResolvers';
import buildDevServer from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): Configuration {
	const { paths, mode } = options;

	return {
		mode,
		entry: paths.entry,
		module: {
			rules: buildLoaders(),
		},
		resolve: buildResolvers(),
		output: {
			filename: '[name].[contenthash].js',
			path: paths.output,
			clean: true,
		},
		plugins: buildPlugins(options),
		devtool: 'inline-source-map',
		devServer: buildDevServer(options),
	};
}

export default buildWebpackConfig;
