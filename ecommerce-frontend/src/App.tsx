//libs
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import axios from "axios";
//components
import { HomePage } from "./pages/home/HomePage.tsx";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OrdersPage } from "./pages/orders/OrdersPage";
import { PageNotFound } from "./pages/PageNotFound.tsx";
//contexts
import { navBarContext } from "./contexts/navBarContext.ts";
//types
import type { cartItem } from "./types/cartItem.ts";
import type { Product } from "./types/product.ts";
//css
import "./App.css";

function App() {
  const [cart, setCart] = useState<cartItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [navBarToggle, setNavBarToggle] = useState<boolean>(false);
  const navBarContextValue = {
    navBarToggle: navBarToggle,
    setNavBarToggle: setNavBarToggle,
  };

  const loadCart = async () => {
    const response = await axios.get("http://localhost:5000/api/cart");
    setCart(response.data.data);
  };
  const loadProducts = async () => {
    const response = await axios.get("http://localhost:5000/api/products");
    setProducts(response.data.data);
  };

  //fetch data
  useEffect(() => {
    loadProducts();
    loadCart();
  }, []);

  return (
    <>
      <Routes>
        <Route
          index
          element={
            <navBarContext.Provider value={navBarContextValue}>
              <HomePage products={products} loadCart={loadCart} cart={cart} />
            </navBarContext.Provider>
          }
        />
        <Route
          path="checkout"
          element={
            <navBarContext.Provider value={navBarContextValue}>
              <CheckoutPage
                loadCart={loadCart}
                cart={cart}
                products={products}
              />
            </navBarContext.Provider>
          }
        ></Route>
        <Route
          path="orders"
          element={
            <navBarContext.Provider value={navBarContextValue}>
              <OrdersPage loadCart={loadCart} cart={cart} />
            </navBarContext.Provider>
          }
        ></Route>
        <Route path="*" element={<PageNotFound cart={cart} />}></Route>
      </Routes>
    </>
  );
}

export default App;
