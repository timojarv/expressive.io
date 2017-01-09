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

export default products.map((product) => {
	return { ...product, id: product.name.toLowerCase() };
});