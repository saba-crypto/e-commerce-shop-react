//types
import type { Product } from "../../types/product";
import type { Dispatch, SetStateAction } from "react";
//css
import "./InspectContainer.css";

export function InspectContainer({
  product,
  addToCart,
  setInspectContainerToggle,
}: {
  product: Product;
  addToCart: () => Promise<void>;
  setInspectContainerToggle: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      <div className="background-container"></div>
      <div className="inspect-container">
        <img
          onClick={() => {
            setInspectContainerToggle(false);
          }}
          className="close-button js-inspect-close"
          src="./Images/Icons/remove.png"
        />
        <img className="image card-image" src={product.image} />
        <div className="body">
          <div className="inspect-game-name-div">
            <div className="game-name">{product.name}</div>
          </div>
          <div className="dev-name-div game-info">
            <img className="icon" src="./Images/Icons/coding.png" alt="" />
            <div className="dev-name game-sub">{product.gameDev}</div>
          </div>
          <div className="rating-div game-info">
            <img className="icon" src="./Images/Icons/pixel_star.png" alt="" />
            <div className="rating game-sub">{product.rating}</div>
          </div>
          <div className="release-date game-info">
            <img className="icon" src="./Images/Icons/calendar.png" alt="" />
            <div className="release-date game-sub">{product.releaseDate}</div>
          </div>
          <button
            onClick={addToCart}
            className="inspect-add-to-cart js-add-to-cart"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
}
