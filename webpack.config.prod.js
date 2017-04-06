const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
				WEBPACK: true
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname, 'src', 'assets'),
				to: path.resolve(__dirname, 'dist', 'assets')
			}
		]),
		new ExtractTextPlugin({
			filename: 'bundle.css'
		})
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: [
					path.resolve(__dirname, 'src'),
				]
			},
			{
				test: /\.scss/,
				loader: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						"css-loader",
						"sass-loader"
					],
					publicPath: path.resolve(__dirname, 'dist')
				}),
				include: [
					path.resolve(__dirname, 'src')
				]
			}
		]
	}
};
