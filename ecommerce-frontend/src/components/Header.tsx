//libs
import { useMemo, useContext } from "react";
import { useNavigate } from "react-router-dom";
//components
import { Link } from "react-router-dom";
//contexts
import { navBarContext } from "../contexts/navBarContext";
//types
import type { cartItem } from "../types/cartItem";
import type { Dispatch } from "react";
import type { SetStateAction } from "react";
//utils
import { calculateTotalCartQuantity } from "../utils/calculateTotalCartQuantity";
//css
import "./Header.css";

type HeaderProps = {
  cart: cartItem[];
  setSearch: Dispatch<SetStateAction<string>>;
};

export function Header({ cart, setSearch }: HeaderProps) {
  const navBarState = useContext(navBarContext);
  const path = window.location.pathname;
  const navigate = useNavigate();
  const totalCartQuantity = useMemo(() => {
    return calculateTotalCartQuantity(cart);
  }, [cart]);

  return (
    <div className="fixed top-0 right-0 left-0 z-100 flex h-17.5 justify-between border-b-2 border-solid border-b-optional bg-secondary align-middle shadow-sm">
      <div className="left-segment flex items-center">
        <img
          onClick={() => {
            navBarState?.setNavBarToggle(true);
          }}
          className="mx-[20px] w-[40px] cursor-pointer"
          src="/Images/Icons/menu.png"
          alt=""
        />
        <Link to={"/"}>
          <p className="m-0 cursor-pointer text-2xl text-optional transition-all duration-15">
            Home
          </p>
        </Link>
      </div>

      <div className="mr-[30px] ml-[30px] flex w-[50%] min-w-[150px] items-center">
        <div className="search-bar flex w-full items-center rounded-[10px] bg-linear-to-r from-[rgb(128,0,255)] to-accent">
          <div
            onClick={() => {
              if (path !== "/") {
                navigate("/");
              }
            }}
            className="search-button flex h-[50px] cursor-pointer items-center justify-center pl-[10px]"
          >
            <img
              className="w-[23px]"
              src="/Images/Icons/white-search.png"
              alt=""
            />
          </div>
          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            name="search-bar-input"
            className="search-bar box-border h-[50px] w-full rounded-[10px] border-none bg-transparent pl-[10px] text-[20px] text-optional placeholder:text-[20px] placeholder:text-optional focus:outline-none"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>

      <div className="mr-5 flex w-67.5 items-center justify-between">
        <div>
          <button className="login-button">Log In</button>
        </div>
        <Link to={"/checkout"}>
          <div className="group relative cursor-pointer">
            <img
              className="cart-icon"
              src="/Images/Icons/Shopping-cart-icon.png"
              alt=""
            />
            {totalCartQuantity ? (
              <p className="absolute top-[-5px] right-0 flex size-[27px] items-center justify-center rounded-full bg-red-600 text-[17px] font-semibold text-optional">
                {totalCartQuantity}
              </p>
            ) : (
              ""
            )}

            <p className="pointer-events-none absolute bottom-[-57px] left-[-22px] translate-y-[-20px] rounded-[7px] bg-secondary p-[10px] text-[18px] font-semibold text-optional opacity-0 duration-200 group-hover:translate-y-0 group-hover:opacity-100">
              Checkout
            </p>
          </div>
        </Link>

        <div>
          <img
            className="profile-photo relative h-15 w-15 cursor-pointer rounded-[30px] object-cover"
            src="/Images/IMG_2176.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
