import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import i18next from 'eslint-plugin-i18next';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';

export default [
	{ files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReactConfig,
	{
		plugins: {
			i18next,
		},
		rules: {
			'react/react-in-jsx-scope': 'off',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{ argsIgnorePattern: '^_' },
			],
			'i18next/no-literal-string': 2,
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
];

// {
//   "plugins": ["i18next"]
// }
