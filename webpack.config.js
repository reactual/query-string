const path = require('path')

module.exports = {
	entry: './index.js',
	mode: 'production',
	// mode: 'development',
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
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	}
}
