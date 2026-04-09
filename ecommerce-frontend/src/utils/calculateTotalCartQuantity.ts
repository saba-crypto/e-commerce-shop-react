import type { cartItem } from "../types/cartItem";
export function calculateTotalCartQuantity(cart: cartItem[]) {
  let total = 0;
  cart.forEach((cartItem) => {
    total += cartItem.quantity;
  });

  return total;
}
