//libs
import { useEffect, useState } from "react";
import axios from "axios";
//components
import { NavigationBar } from "../../components/NavigationBar";
import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary";
import { CheckoutHeader } from "./CheckoutHeader";
//types
import type { cartItem } from "../../types/cartItem";
import type { Product } from "../../types/product";
import type { PaymentCosts } from "../../types/PaymentCosts";

//css
import "./CheckoutPage.css";

export function CheckoutPage({
  cart,
  products,
  loadCart,
}: {
  cart: cartItem[];
  products: Product[];
  loadCart: () => Promise<void>;
}) {
  const [paymentCosts, setPaymentCosts] = useState<PaymentCosts>();
  const loadPaymentCosts = async () => {
    const response = await axios.get("http://localhost:5000/api/paymentCosts");
    setPaymentCosts(response.data.data);
  };

  useEffect(() => {
    loadPaymentCosts();
  }, [cart]);
  return (
    <>
      <title>Checkout</title>
      <NavigationBar />
      <CheckoutHeader cart={cart} />
      <main className="main">
        <OrderSummary loadCart={loadCart} cart={cart} products={products} />
        <PaymentSummary
          paymentCosts={paymentCosts}
          cart={cart}
          loadCart={loadCart}
        />
      </main>
    </>
  );
}
