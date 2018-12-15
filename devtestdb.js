const data = require("./data");
const dbConnection = require("./data/mongoConnection.js");
const productData = data.productsData;
const userData = data.userData;
const adminData = data.adminData;

const test_product1 = {
    "prod_name": "HP ENVY x360 Convertible",
    "prod_image1": "http://www.myhost.com/images/my/path/to/image1.jpg",
    "prod_image2": "http://www.myhost.com/images/my/path/to/image2.jpg",
    "prod_image3": null,
    "prod_brand": "HP",
    "prod_price": "$ 750.99",
    "prod_screensize": "14.9 Inches",
    "prod_ram": "16 GB",
    "prod_processor": "Intel Core i7",
    "prod_hard_disk_size": "1 TB",
    "prod_rating": "4.0 out of 5.0",
    "sold": false
};

const test_product2 = {
    "prod_name": "HP ENVY2 x360 Convertible",
    "prod_image1": "http://www.myhost.com/images/my/path/to/image1.jpg",
    "prod_image2": "http://www.myhost.com/images/my/path/to/image2.jpg",
    "prod_image3": null,
    "prod_brand": "HP",
    "prod_price": "$ 750.99",
    "prod_screensize": "14.9 Inches",
    "prod_ram": "16 GB",
    "prod_processor": "Intel Core i7",
    "prod_hard_disk_size": "1 TB",
    "prod_rating": "4.0 out of 5.0",
    "sold": false
};

const test_product3 = {
    "prod_name": "HP ENVY3 x360 Convertible",
    "prod_image1": "http://www.myhost.com/images/my/path/to/image1.jpg",
    "prod_image2": "http://www.myhost.com/images/my/path/to/image2.jpg",
    "prod_image3": null,
    "prod_brand": "HP",
    "prod_price": "$ 750.99",
    "prod_screensize": "14.9 Inches",
    "prod_ram": "16 GB",
    "prod_processor": "Intel Core i7",
    "prod_hard_disk_size": "1 TB",
    "prod_rating": "4.0 out of 5.0",
    "sold": false
};

const test_product4 = {
    "prod_name": "HP ENVY4 x360 Convertible",
    "prod_image1": "http://www.myhost.com/images/my/path/to/image1.jpg",
    "prod_image2": "http://www.myhost.com/images/my/path/to/image2.jpg",
    "prod_image3": null,
    "prod_brand": "HP",
    "prod_price": "$ 750.99",
    "prod_screensize": "14.9 Inches",
    "prod_ram": "16 GB",
    "prod_processor": "Intel Core i7",
    "prod_hard_disk_size": "1 TB",
    "prod_rating": "4.0 out of 5.0",
    "sold": false
};

const test_product5 = {
    "prod_name": "HP ENVY5 x360 Convertible",
    "prod_image1": "http://www.myhost.com/images/my/path/to/image1.jpg",
    "prod_image2": "http://www.myhost.com/images/my/path/to/image2.jpg",
    "prod_image3": null,
    "prod_brand": "HP",
    "prod_price": "$ 750.99",
    "prod_screensize": "14.9 Inches",
    "prod_ram": "16 GB",
    "prod_processor": "Intel Core i7",
    "prod_hard_disk_size": "1 TB",
    "prod_rating": "4.0 out of 5.0",
    "sold": false
};

const test_product6 = {
    "prod_name": "HP ENVY6 x360 Convertible",
    "prod_image1": "http://www.myhost.com/images/my/path/to/image1.jpg",
    "prod_image2": "http://www.myhost.com/images/my/path/to/image2.jpg",
    "prod_image3": null,
    "prod_brand": "HP",
    "prod_price": "$ 750.99",
    "prod_screensize": "14.9 Inches",
    "prod_ram": "16 GB",
    "prod_processor": "Intel Core i7",
    "prod_hard_disk_size": "1 TB",
    "prod_rating": "4.0 out of 5.0",
    "sold": false
};

const test_product7 = {
    "prod_name": "HP ENVY7 x360 Convertible",
    "prod_image1": "http://www.myhost.com/images/my/path/to/image1.jpg",
    "prod_image2": "http://www.myhost.com/images/my/path/to/image2.jpg",
    "prod_image3": null,
    "prod_brand": "HP",
    "prod_price": "$ 750.99",
    "prod_screensize": "14.9 Inches",
    "prod_ram": "16 GB",
    "prod_processor": "Intel Core i7",
    "prod_hard_disk_size": "1 TB",
    "prod_rating": "4.0 out of 5.0",
    "sold": false
};

async function main() {
    //connect to db and sanitize it
    const db = await dbConnection();
    await db.dropDatabase();

    //Product DB Tests
    createProductTest = await productData.createProductByObject(test_product1);
    createProductTest = await productData.createProductByObject(test_product2);
    createProductTest = await productData.createProductByObject(test_product3);
    createProductTest = await productData.createProductByObject(test_product4);
    createProductTest = await productData.createProductByObject(test_product5);
    createProductTest = await productData.createProductByObject(test_product6);
    createProductTest = await productData.createProductByObject(test_product7);

    console.log("create product: " + JSON.stringify(createProductTest));

    //Done
    console.log("Done.");
    await db.close();
}

main();