const express = require("express");
const router = express.Router();
const productData = require("../data/products");
//const dnsimple = require("dnsimple");
const domainr = require("domainr-api");

//const accessToken = "LtIFTZ0Znxv4dG5pv7gDUCq7l3npUvPT";
//const baseUrl = "https://api.sandbox.dnsimple.com";
//const accountId = 429;

const mashapeKey = "WhuPEvLBaqmshAoMZ56wzCP4vbT1p1YTDaQjsnBLrJTQMAUph8"
let domainrApi = new domainr(mashapeKey);

//const client = dnsimple({ accessToken, baseUrl });

router.get("/", (req, res) => {
	res.json({
		version: '0.1.0'
	});
});

router.get("/products", (req, res) => {
	res.json({
		status: 'ok',
		products: productData
	});
});

router.get("/domain/:domain", (req, res) => {
	const domain = req.params.domain;
	domainrApi.status([domain]).then(response => {
		let available = false;
		available = available || (response.length && response[0].status.indexOf('inactive') > -1);
		available = available || (response.length && response[0].status.indexOf('undelegated') > -1);
		available = available && (response.length && response[0].status.indexOf('premium') === -1);
		res.json({ available, domain });
	}).catch(err => {
		console.log(err);
		res.status(500).end();
	});
});

module.exports = router;