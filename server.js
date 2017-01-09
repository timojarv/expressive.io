const express = require("express");
const app = express();
const path = require("path");
const webpack = require("webpack");
const webpackMiddleware = require("webpack-dev-middleware");
const apiRoutes = require("./routes/api");
const evil = require("evil-icons");

const compiler = webpack(require("./webpack.config"));

//Use webpack middleware in development

if(process.env.NODE_ENV !== 'production') {
	app.use(webpackMiddleware(compiler));
}

app.set("view engine", "ejs");

//API routes
app.use("/api", apiRoutes);

app.use(express.static('public'));

app.get("*", (req, res) => {
	res.render("index", { evilSprite: evil.sprite });
});

app.listen(3000);