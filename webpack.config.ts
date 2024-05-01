import path from 'path';
import { Configuration } from 'webpack';
import buildWebpackConfig from './config/build/buildWebpackConfig';
import { BuildPaths } from './config/build/types/config';

const paths: BuildPaths = {
	entry: path.resolve(__dirname, 'src', 'index.ts'),
	output: path.resolve(__dirname, 'dist'),
	html: path.resolve(__dirname, 'public', 'index.html'),
};

const mode = 'development';
const isDev = mode === 'development';

const PORT = 3000;

const config: Configuration = buildWebpackConfig({
	mode,
	paths,
	isDev,
	port: PORT,
});

export default config;