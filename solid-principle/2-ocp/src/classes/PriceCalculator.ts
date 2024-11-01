import { Discount } from "./Discount";

export class PriceCalculator {
  constructor(private discount: Discount) {}

  calculateFinalPrice(price: number): number {
    return this.discount.calculate(price);
  }
}
