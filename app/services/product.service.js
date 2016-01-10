System.register([], function(exports_1) {
    var ProductService;
    return {
        setters:[],
        execute: function() {
            ProductService = (function () {
                function ProductService() {
                    this.sku = '67525180';
                    this.name = 'A Black Hat';
                    this.imageUrl = '/resources/images/products/black-hat.jpg';
                    this.department = ['Men', 'Accessories', 'Hats'];
                    this.price = 19.99;
                }
                return ProductService;
            })();
            exports_1("ProductService", ProductService);
        }
    }
});
//# sourceMappingURL=product.service.js.map