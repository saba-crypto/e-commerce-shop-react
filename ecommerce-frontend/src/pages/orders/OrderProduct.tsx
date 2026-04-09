//libs
import dayjs from "dayjs";
//types
import type { Product } from "../../types/product";
import type { OrderData } from "../../types/Order";
//css
import "./OrderProduct.css";
import axios from "axios";

export function OrderProduct({
  product,
  order,
  loadCart,
}: {
  product: Product;
  order: OrderData;
  loadCart: () => Promise<void>;
}) {
  const addToCart = async () => {
    await axios.post("http://localhost:5000/api/cart", {
      productId: product.id,
      quantity: 1,
    });
    loadCart();
  };

  //calculate progress bar percentage
  const today = Number(dayjs().format("D"));
  const orderDate = Number(dayjs(order.orderDate).format("D"));
  const deliveryDays = product.deliveryDays;
  const deliveryDate = orderDate + deliveryDays!;

  let progressBarPercentage =
    ((today - orderDate) / (deliveryDate - orderDate)) * 100;

  if (progressBarPercentage < 5) {
    progressBarPercentage = 5;
  }
  return (
    <>
      <div className="product-order">
        <div className="product-image-div">
          <img
            className="product-image"
            src={product.image}
            alt="couldn't load product image X("
          />
        </div>
        <div className="order-info">
          <div className="product-description">
            <div style={{ textAlign: "center" }}>{product.name}</div>
            <div style={{ textAlign: "center" }}>
              Quantity: {product.quantity}
            </div>
          </div>
          <div className="arrival-text">
            Arriving on: {dayjs(product.arrivalDate).format("MMMM D")}
          </div>
          <div className="progress-div">
            <div className="progress-status-text">
              <p>Prepared</p>
              <p>Sent</p>
              <p>Delivered</p>
            </div>
            <div className="progress-bar">
              <div
                style={{ width: `${progressBarPercentage}%` }}
                className="progress-status"
              ></div>
            </div>
          </div>
        </div>
        <div className="buy-again-div">
          <button onClick={addToCart} className="buy-again-button">
            <img
              className="buy-it-again-image"
              src="/Images/Icons/buy-again.png"
              alt="Buy again"
            />
            Buy It Again
          </button>
        </div>
      </div>
      <hr />
    </>
  );
}
