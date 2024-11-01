import { Discount } from "./Discount";

export class PromotionDiscount extends Discount {
  calculate(price: number): number {
    return price * 0.8;
  }
}
