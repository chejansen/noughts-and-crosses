const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
	entry: [
		'webpack-hot-middleware/client',
		path.resolve(__dirname, 'src')
	],
	output: {
		path: path.resolve(__dirname, 'src'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development'),
				WEBPACK: true
			}
		})
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: [
					path.resolve(__dirname, 'src'),
				],
				options: {
					presets: [ 'react-hmre' ]
				}
			},
			{
				test: /\.scss/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				],
				include: [
					path.resolve(__dirname, 'src'),
				]
			}
		]
	}
};
