import { Game } from "../Game";
import "./GamesGrid.css";
import type { Product } from "../../../types/product";
export function GamesGrid({
  regularProducts,
  loadCart,
}: {
  regularProducts: Product[];
  loadCart: () => Promise<void>;
}) {
  return (
    <>
      <div className="more-games-grid">
        {regularProducts.map((product) => {
          return (
            <Game loadCart={loadCart} key={product.id} product={product} />
          );
        })}
      </div>
    </>
  );
}
