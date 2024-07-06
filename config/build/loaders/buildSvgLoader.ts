export function buildSvgLoader() {
	return {
		test: /\.svg$/,
		use: [
			{
				loader: '@svgr/webpack',
			},
			{
				loader: 'file-loader',
				options: {
					name: 'static/[path][name].[ext]',
				},
			},
		],
		type: 'javascript/auto',
		issuer: {
			and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
		},
	};
}
