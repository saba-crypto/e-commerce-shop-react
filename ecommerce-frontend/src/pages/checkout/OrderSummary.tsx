//libs
import axios from "axios";
import { useState, useEffect } from "react";
//types
import type { cartItem } from "../../types/cartItem";
import type { Product } from "../../types/product";
import type { DeliveryOption } from "../../types/DeliveryOption";
//components(s)
import { Order } from "./Order";
//css
import "./OrderSummary.css";

export function OrderSummary({
  cart,
  products,
  loadCart,
}: {
  cart: cartItem[];
  products: Product[];
  loadCart: () => Promise<void>;
}) {
  const [deliveryOptions, setDeliveryOptions] = useState<DeliveryOption[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:5000/api/deliveryOptions",
      );
      setDeliveryOptions(response.data.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="order-summary-grid">
        {cart.map((cartItem) => {
          const matchingProduct = products.find((product) => {
            return product.id === cartItem.productId;
          });
          if (!matchingProduct) {
            return <h1>unexpected error occurred, please try again later</h1>;
          }
          return (
            <Order
              key={cartItem.productId}
              loadCart={loadCart}
              product={matchingProduct}
              cartItem={cartItem}
              deliveryOptions={deliveryOptions}
            />
          );
        })}
      </div>
    </>
  );
}
