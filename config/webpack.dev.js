const path = require('path')
module.export = {
	mode: 'development',
	entry: {
		main: './src/main.js'
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].js'
	},
	module: {},
	plugins: [],
	devServer: {
		contentBase: path.resolve(__dirname, '../dist'),
		host: 'localhost',
		compress: true,
		port: 8088
	}
}