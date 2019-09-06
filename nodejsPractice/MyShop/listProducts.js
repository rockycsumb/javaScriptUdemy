var faker = require('faker');

// var randomProduct = faker.commerce.product();
// var randomPrice = faker.commerce.price();

function displayInfo(num) {
	if (num < 1) {
		return 0;
	}
	console.log(faker.commerce.productName() + " - " + faker.commerce.price());
	return displayInfo(num - 1);
}


displayInfo(10);

