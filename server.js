const express = require("express");
const app = express();
const path = require("path");
const webpack = require("webpack");
const webpackMiddleware = require("webpack-dev-middleware");

const compiler = webpack(require("./webpack.config"));

//Use webpack middleware in development

if(process.env.NODE_ENV !== 'production') {
	app.use(webpackMiddleware(compiler));
}

app.use(express.static('public'));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, 'src/index.html'));
});

app.listen(3000);