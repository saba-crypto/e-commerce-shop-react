import type { Subscription } from "../../../types/subscription";
import type { SubscriptionProperty } from "../../../types/subscription";
import { formatCurrency } from "../../../utils/money";
import "./SubscriptionCard.css";

export function SubscriptionCard({
  subscription,
}: {
  subscription: Subscription;
}) {
  return (
    <>
      <div className="subscription-card">
        <div className="card-header">
          <p className="price">
            {formatCurrency(subscription.priceCents)}
            <span className="idk-what-to-call-this-thing">/month</span>
          </p>
          <p className="secondary-info">{subscription.description}</p>
        </div>
        <div className="main-content">
          {subscription.properties.map((property: SubscriptionProperty) => {
            return (
              <p key={property.id} className="list_item">
                {property.includes ? (
                  <span className="checkmark">✓</span>
                ) : (
                  <span className="x-mark">✕</span>
                )}
                {property.description}
              </p>
            );
          })}
        </div>
        <div className="buy-now-button-div">
          <button className="buy-now-button">Buy Now</button>
        </div>
      </div>
    </>
  );
}
/*<p className="list_item">
            <span>{subscription.discountPercentage ? "✓" : `✕`}</span>
            10% Discount On Every Game
          </p>
          <p className="list_item">
            <span>{subscription.adFreeExperience ? "✓" : "✕"}</span>
            AD Free Experience
          </p>
          <p className="list_item">
            <span>{subscription.specialGameList ? "✓" : "✕"}</span>
            More Special Game List
          </p>
          <p className="list_item">
            <span>{subscription.betterDiscountPercentage ? "✓" : "✕"}</span>
            20% Discount On Every Game
          </p>
          <p className="list_item">
            {subscription.premiumToken ? (
              <span className="check-mark">✓</span>
            ) : (
              <span className="x-mark">✕</span>
            )}
            Premium Token
          </p> */
