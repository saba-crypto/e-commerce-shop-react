import { Header } from "../components/Header";
import type { cartItem } from "../types/cartItem";
export function PageNotFound({ cart }: { cart: cartItem[] }) {
  return (
    <>
      <Header cart={cart} />
      <h1
        style={{
          marginTop: "100px",
          fontSize: "2.3rem",
          color: "white",
          fontWeight: "600",
        }}
      >
        Error 404 Page not Found, Please Make Sure URL is Correct
      </h1>
    </>
  );
}
