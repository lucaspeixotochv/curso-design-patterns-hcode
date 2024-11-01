import { Discount } from "./Discount";

export class VIPDiscount extends Discount {
  calculate(price: number): number {
    return price * 0.9;
  }
}
