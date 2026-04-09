import { SubscriptionCard } from "./SubscriptionCard";
import type { Subscription } from "../../../types/subscription";
import "./SubscriptionsGrid.css";
export function SubscriptionsGrid({
  subscriptions,
}: {
  subscriptions: Subscription[];
}) {
  return (
    <>
      <div className="subscriptions-grid">
        {subscriptions.map((subscription) => {
          return (
            <SubscriptionCard
              key={subscription.id}
              subscription={subscription}
            />
          );
        })}
      </div>
    </>
  );
}
