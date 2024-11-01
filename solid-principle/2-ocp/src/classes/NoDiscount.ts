import { Discount } from "./Discount";

export class NoDiscount extends Discount {
  calculate(price: number): number {
    return price;
  }
}
