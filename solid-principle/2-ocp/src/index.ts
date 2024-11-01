import { NoDiscount } from "./classes/NoDiscount";
import { PriceCalculator } from "./classes/PriceCalculator";
import { PromotionDiscount } from "./classes/PromotionDiscount";
import { VIPDiscount } from "./classes/VIPDiscount";

const productPrice = 100;

// Cliente sem desconto
const noDiscount = new PriceCalculator(new NoDiscount());
console.log(
  `Preço sem desconto: ${noDiscount.calculateFinalPrice(productPrice)}`
);

// Cliente VIP
const vipDiscount = new PriceCalculator(new VIPDiscount());
console.log(
  `Preço para cliente vip: ${vipDiscount.calculateFinalPrice(productPrice)}`
);

// Produto em promoção
const promotionDiscount = new PriceCalculator(new PromotionDiscount());
console.log(
  `Preço para promoção: ${promotionDiscount.calculateFinalPrice(productPrice)}`
);
