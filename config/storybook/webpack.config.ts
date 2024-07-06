import path from 'path';
import { Configuration, RuleSetRule } from 'webpack';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export default ({ config }: { config: Configuration }) => {
	const paths: BuildPaths = {
		output: '',
		html: '',
		entry: '',
		src: path.resolve(__dirname, '..', '..', 'src'),
	};

	config.resolve?.modules?.push(paths.src);
	config.resolve!.alias = {
		'@': [path.resolve(__dirname, '..', '..', 'src')],
	};
	config.resolve?.extensions?.push('.ts', 'tsx');

	config.module?.rules
		?.filter(
			(rule) =>
				typeof rule === 'object' &&
				rule?.test instanceof RegExp &&
				rule.test.test('.svg')
		)
		.forEach((rule) => ((rule as RuleSetRule).exclude = /\.svg$/i));

	config.module?.rules?.push(buildSvgLoader());
	config.module?.rules?.push(buildCssLoader(true));

	return config;
};
