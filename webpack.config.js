const path = require('path')

module.exports = {
	entry: './index.js',
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env'],
					plugins: [],
				}
			}
		]
	},
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist')
	}
}
