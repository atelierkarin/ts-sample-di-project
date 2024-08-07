export default class CafeMenu {
  id: number;
  name: string;
  price: number;
  stock: number;

  constructor(id: number, name: string, price: number, stock: number = 1) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}