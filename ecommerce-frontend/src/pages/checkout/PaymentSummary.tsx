//libs
import axios from "axios";
import { useNavigate } from "react-router-dom";
//types
import { useMemo } from "react";
import type { PaymentCosts } from "../../types/PaymentCosts";
import type { cartItem } from "../../types/cartItem";
//utils
import { formatCurrency } from "../../utils/money";
//css
import "./PaymentSummary.css";

export function PaymentSummary({
  paymentCosts,
  cart,
  loadCart,
}: {
  paymentCosts?: PaymentCosts;
  cart: cartItem[];
  loadCart: () => Promise<void>;
}) {
  const navigate = useNavigate();
  const totalCartItems = useMemo(() => {
    let total = 0;
    cart.forEach((cartItem) => {
      total += cartItem.quantity;
    });
    return total;
  }, [cart]);

  if (!paymentCosts) {
    return <div>rendering Payment Summary...</div>;
  }

  async function createOrder() {
    await axios.post("http://localhost:5000/api/orders");
    loadCart();
    navigate("/orders");
  }

  return (
    <div className="payment-summary">
      <div className="pay-check">
        <h2 className="pay-check-title">Order summary</h2>
        <div className="total-cash-div">
          <div className="price-div cash-div">
            <p className="price-text">Items({totalCartItems}):</p>
            <p className="price-text">
              {formatCurrency(paymentCosts.totalItemsPriceCents)}
            </p>
          </div>
          <div className="tax-div cash-div">
            <p className="price-text">shipping:</p>
            <p className="price-text">
              {formatCurrency(paymentCosts.totalShippingPriceCents)}
            </p>
          </div>
          <div className="delivery-price-div cash-div">
            <p className="price-text">Total before tax:</p>
            <p className="price-text">
              {formatCurrency(paymentCosts.totalBeforeTaxPriceCents)}
            </p>
          </div>
          <div className="cash-div">
            <p className="price-text">Estimated tax(10%):</p>
            <p className="price-text">
              {formatCurrency(paymentCosts.taxPriceCents)}
            </p>
          </div>
        </div>
        <div className="total-div">
          <div className="total">
            Order total:
            <span>{formatCurrency(paymentCosts.subTotalPriceCents)}</span>
          </div>
        </div>
        <div className="pay-button-div">
          <button onClick={createOrder} className="pay-button js-pay">
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
}
