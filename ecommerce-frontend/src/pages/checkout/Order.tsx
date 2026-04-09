//libs
import axios from "axios";
import { useState } from "react";
//utils
import { formatCurrency } from "../../utils/money";
//types
import type { Product } from "../../types/product";
import type { cartItem } from "../../types/cartItem";
import type { DeliveryOption } from "../../types/DeliveryOption";
//css
import "./Order.css";

export function Order({
  loadCart,
  product,
  cartItem,
  deliveryOptions,
}: {
  loadCart: () => Promise<void>;
  product: Product;
  cartItem: cartItem;
  deliveryOptions: DeliveryOption[];
}) {
  const [isEditingQuantity, setIsEditingQuantity] = useState(false);
  const [inputValue, setInputValue] = useState("");
  async function removeFromCart() {
    await axios.delete(`http://localhost:5000/api/cart/${product.id}`);
    loadCart();
  }

  async function changeCartItemQuantity() {
    await axios.put(`http://localhost:5000/api/cart/${product.id}`, {
      quantity: Number(inputValue),
    });
    setIsEditingQuantity(false);
    loadCart();
  }

  async function changeCartItemDeliveryOption(deliveryOption: DeliveryOption) {
    await axios.put(`http://localhost:5000/api/cart/${product.id}`, {
      deliveryOptionId: deliveryOption.id,
    });
    loadCart();
  }

  return (
    <div className="checkout-order">
      <div className="order-image-container">
        <img
          className="order-image"
          draggable="false"
          src={product.image}
          alt="couldn't load image"
        />
      </div>
      <div className="order-details">
        <div className="order-name-div">
          <h2 className="order-name">{product.name}</h2>
        </div>
        <div className="order-price-quantity">
          <p className="order-price">
            Price: {formatCurrency(product.priceCents)}
          </p>
          <p className="order-quantity">
            Quantity:
            {isEditingQuantity ? (
              <input
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
                value={inputValue}
                className="quantity-input"
                type="number"
              />
            ) : (
              <span className="quantity-label">{cartItem.quantity}</span>
            )}
          </p>
        </div>
        <div className="buttons-div">
          <button onClick={removeFromCart} className="remove-button">
            Remove
          </button>
          {isEditingQuantity ? (
            <button onClick={changeCartItemQuantity} className="save-button">
              Save
            </button>
          ) : (
            <button
              onClick={() => {
                setIsEditingQuantity(true);
              }}
              className="update-button"
            >
              Update
            </button>
          )}
        </div>
      </div>
      <div className="delivery-options">
        <div className="delivery-option-title">Delivery Options:</div>
        {deliveryOptions.map((deliveryOption) => {
          const deliveryPrice =
            deliveryOption.priceCents === 0
              ? "FREE"
              : formatCurrency(deliveryOption.priceCents);
          const isChecked = deliveryOption.id === cartItem.deliveryOptionId;
          return (
            <div key={deliveryOption.id} className="delivery-option">
              <input
                checked={isChecked}
                onChange={() => {
                  changeCartItemDeliveryOption(deliveryOption);
                }}
                className="radio-input"
                type="radio"
                name={product.id}
              />

              <p className="delivery-title">
                {deliveryOption.name}
                <span className="date-sub">
                  ({deliveryOption.deliveryDays} days)
                </span>
              </p>
              <p className="delivery-sub">{deliveryPrice}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
