const data = require("./data");
const productData = data.productsData;

const test_product1 = {
 	"prod_name":"HP ENVY x360 Convertible",
 	"prod_image1": "http://www.myhost.com/images/my/path/to/image1.jpg",
    "prod_image2": "http://www.myhost.com/images/my/path/to/image2.jpg",
    "prod_image3": null,
 	"prod_brand": "HP",
 	"prod_price": "$ 750.99",
 	"prod_screensize":"14.9 Inches",
 	"prod_ram":"16 GB",
 	"prod_processor": "Intel Core i7",
	"prod_hard_disk_size":"1 TB",
 	"prod_rating":"4.0 out of 5.0",
	"sold": false
};

async function main() {
	createProductTest = await productData.createProductByObject(test_product1);

	console.log("create product: " + JSON.stringify(createProductTest));

	getProductTest = await productData.getProduct(createProductTest["_id"]);

	console.log("get product: " + JSON.stringify(getProductTest));

	removeProductTest = await productData.removeProduct(getProductTest["_id"])

	console.log("delete product: " + removeProductTest);

	return;
}

main();
