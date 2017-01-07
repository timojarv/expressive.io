path = require("path");

module.exports = {
	entry: path.join(__dirname, 'src/index.js'),
	output: {
		path: path.join(__dirname, 'src/public/'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: 'style!css' }
		]
	},
	colors: true
}