import { Order } from "./Order.tsx";
import type { OrderData } from "../../types/Order.ts";
import "./OrdersGrid.css";

export function OrdersGrid({
  orders,
  loadCart,
}: {
  orders: OrderData[];
  loadCart: () => Promise<void>;
}) {
  return (
    <section className="main-section">
      <div className="orders-title">
        <p className="orders-text bold">Your Orders:</p>
      </div>
      <div className="orders-list">
        {orders.map((order) => {
          return (
            <Order loadCart={loadCart} key={order.orderId} order={order} />
          );
        })}
      </div>
    </section>
  );
}
