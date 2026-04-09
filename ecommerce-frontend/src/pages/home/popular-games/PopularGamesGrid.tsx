import { Game } from "../Game";
import "./PopularGamesGrid.css";
import type { Product } from "../../../types/product";
export function PopularGamesGrid({
  popularProducts,
  loadCart,
}: {
  popularProducts: Product[];
  loadCart: () => Promise<void>;
}) {
  return (
    <>
      <div className="popular-games-segment js-popular-games-grid">
        {popularProducts.map((product) => {
          return (
            <Game loadCart={loadCart} key={product.id} product={product} />
          );
        })}
      </div>
    </>
  );
}
