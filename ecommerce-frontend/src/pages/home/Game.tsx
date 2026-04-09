//libs
import axios from "axios";
import { useState } from "react";
//components
import { InspectContainer } from "./InspectContainer";
//utils
import { formatCurrency } from "../../utils/money";
//types
import type { Product } from "../../types/product";
//css
import "./Game.css";

export function Game({
  product,
  loadCart,
}: {
  product: Product;
  loadCart: () => Promise<void>;
}) {
  const [inspectContainerToggle, setInspectContainerToggle] =
    useState<boolean>(false);
  const addToCart = async () => {
    await axios.post("http://localhost:5000/api/cart", {
      productId: product.id,
      quantity: 1,
    });
    loadCart();
  };

  return (
    <>
      <div className="game-card">
        <div className="game-image-div">
          <img
            className="game-image"
            src={product.image}
            alt="couldn't load image"
          />
        </div>
        <div className="game-stats">
          <div className="game-price-teg-div">
            <p className="game-price-teg">
              Price: {formatCurrency(product.priceCents)}
            </p>
          </div>
          <div className="game-info-flex">
            <div className="game-info">
              <button onClick={addToCart} className="add-to-cart-button">
                Add to cart
              </button>
              <button
                onClick={() => {
                  setInspectContainerToggle(true);
                }}
                className="examine-button js-inspect"
              >
                Inspect
              </button>
            </div>
            <div className="game-name-div">
              <div className="game-name2">{product.name}</div>
            </div>
          </div>
        </div>
      </div>
      {inspectContainerToggle ? (
        <InspectContainer
          product={product}
          setInspectContainerToggle={setInspectContainerToggle}
          addToCart={addToCart}
        />
      ) : (
        ""
      )}
    </>
  );
}
