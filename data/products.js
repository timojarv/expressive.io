const products = [
	{
		name: 'Revenue',
		description: 'Awesome!'
	},
	{
		name: 'Menu',
		description: 'Cool!'
	}
];

module.exports = products.map((product) => {
	product.id = product.name.toLowerCase();
	return product;
});