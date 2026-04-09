//libs
import { Link, useNavigate } from "react-router-dom";
import { useMemo, useContext } from "react";
//contexts
import { navBarContext } from "../../contexts/navBarContext";
//types
import type { cartItem } from "../../types/cartItem";
//utils
import { calculateTotalCartQuantity } from "../../utils/calculateTotalCartQuantity";
//css
import "./CheckoutHeader.css";

export function CheckoutHeader({ cart }: { cart: cartItem[] }) {
  const navigate = useNavigate();
  const navBarState = useContext(navBarContext);

  const totalCartQuantity = useMemo(() => {
    return calculateTotalCartQuantity(cart);
  }, [cart]);

  return (
    <div className="js-checkout-header header">
      <section className="left-side">
        <img
          onClick={() => {
            navBarState?.setNavBarToggle(true);
          }}
          className="header-image menu-icon js-menu-icon"
          src="/Images/Icons/menu.png"
          alt=""
        />
        <Link to={"/"}>
          <p className="home-button js-home-link">Home</p>
        </Link>
      </section>

      <section className="middle-side">
        <h1 className="page-title">Checkout({totalCartQuantity || 0} items)</h1>
      </section>

      <section className="right-side">
        <button
          onClick={() => {
            navigate("/orders");
          }}
          className="track-orders-button js-track-orders"
        >
          Track Orders
        </button>
        <button className="log-in-button">Log In</button>
        <div className="profile-photo-div">
          <img
            className="header-image profile-photo"
            src="/Images/IMG_2176.jpg"
            alt=""
          />
          <div className="tooltip">
            <p className="first-name">
              <img
                className="identity-icon"
                src="./Images/Icons/user.png"
                alt=""
              />
              First name: Saba
            </p>
            <p className="last-name">
              <img
                className="identity-icon"
                src="./Images/Icons/user.png"
                alt=""
              />
              Last name: Gochishvili
            </p>
            <p className="number">
              <img
                className="identity-icon"
                src="./Images/Icons/telephone.png"
                alt=""
              />
              Phone number: 2910291-1921
            </p>
            <p className="address">
              <img
                className="identity-icon"
                src="./Images/Icons/pin.png"
                alt=""
              />
              Address: white house
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
