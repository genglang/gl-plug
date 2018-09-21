const path = require('path')
module.export = {
	mode: 'development',
	entry: {
		main: './src/main.js'
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'bundle.js'
	},
	module: {},
	plugins: [],
	devServer: {}
}