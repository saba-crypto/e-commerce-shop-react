//libs
import dayjs from "dayjs";
//components
import { OrderProduct } from "./OrderProduct.tsx";
//utils
import { formatCurrency } from "../../utils/money.ts";
//types
import type { OrderData } from "../../types/Order.ts";
//css
import "./Order.css";

export function Order({
  order,
  loadCart,
}: {
  order: OrderData;
  loadCart: () => Promise<void>;
}) {
  return (
    <div className="order-container">
      <div className="order-header">
        <div>
          <p className="bold">Order Placed:</p>
          <p>{dayjs(order.orderDate).format("MMMM D")}</p>
        </div>
        <div>
          <p className="bold">Total:</p>
          <p>{formatCurrency(order.orderPriceCents)}</p>
        </div>
      </div>
      <div className="orders-grid">
        {order.products.map((product) => {
          return (
            <OrderProduct
              loadCart={loadCart}
              key={product.name}
              order={order}
              product={product}
            />
          );
        })}
      </div>
    </div>
  );
}
