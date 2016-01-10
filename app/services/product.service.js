System.register(["./models/product"], function(exports_1) {
    var product_1;
    var ProductService;
    return {
        setters:[
            function (product_1_1) {
                product_1 = product_1_1;
            }],
        execute: function() {
            ProductService = (function () {
                function ProductService() {
                    this.products = new Array();
                    this.products.push(new product_1.Product('67525180', 'A Black Hat', '/resources/images/products/black-hat.jpg', ['Men', 'Accessories', 'Hats'], 19.99));
                    this.products.push(new product_1.Product('87345714', 'Blue Jacket', '/resources/images/products/blue-jacket.jpg', ['Women', 'Apparel', 'Jackets & Vests'], 238.99));
                    this.products.push(new product_1.Product('12346313', 'Black Running Shoes', '/resources/images/products/black-shoes.jpg', ['Men', 'Shoes', 'Running Shoes'], 109.99));
                }
                return ProductService;
            })();
            exports_1("ProductService", ProductService);
        }
    }
});
//# sourceMappingURL=product.service.js.map