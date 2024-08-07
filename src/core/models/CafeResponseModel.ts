export default class CafeResponseModel {
  shop: string;
  name: string;
  price: number;

  constructor(shop: string, name: string, price: number) {
    this.shop = shop;
    this.name = name;
    this.price = price;
  }
}