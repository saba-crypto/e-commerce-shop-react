//libs
import { useEffect, useState } from "react";
import axios from "axios";
//components
import { Header } from "../../components/Header";
import { NavigationBar } from "../../components/NavigationBar";
import { OrdersGrid } from "./OrdersGrid";
//types
import type { cartItem } from "../../types/cartItem";
import type { OrderData } from "../../types/Order";

export function OrdersPage({
  cart,
  loadCart,
}: {
  cart: cartItem[];
  loadCart: () => Promise<void>;
}) {
  const [orders, setOrders] = useState<OrderData[]>([]);
  const loadOrders = async () => {
    const response = await axios.get("http://localhost:5000/api/orders");
    setOrders(response.data.data);
  };

  useEffect(() => {
    loadOrders();
  }, []);
  return (
    <>
      <title>Orders</title>
      <Header cart={cart} />
      <NavigationBar />
      <OrdersGrid loadCart={loadCart} orders={orders} />
    </>
  );
}
