const path = require('path')
const uglify = require('uglifyjs-webpack-plugin') // js压缩
const htmlPlugin = require('html-webpack-plugin') // js压缩
module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].js',
	},
	module: {},
	plugins: [
		new uglify(),
		new htmlPlugin({
			minify: {
				removeAttributeQuotes: true
			},
			hash: true,
			template: './src/test.html'
		})
	],
	devServer: {
		contentBase: path.resolve(__dirname, '../dist'),
		host: 'localhost',
		compress: true,
		port: 8088
	}
}