// Object defintiion for a product. Keeping all object models sepearte will
// the application easier to maintain and follow.
export class Product {
  sku: string;
  name: string;
  imageUrl: string;
  department: string[];
  price: number;

  constructor(sku: string, name: string, imageUrl: string,
      department: string[], price: number){
    this.sku = sku;
    this.name = name;
    this.imageUrl = imageUrl;
    this.department = department;
    this.price = price;
  }
}
