//libs
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
//types
import type { Product } from "../../types/product";
import type { cartItem } from "../../types/cartItem";

//components
import { Header } from "../../components/Header";
import { NavigationBar } from "../../components/NavigationBar";
import { HeroSection } from "./hero-section/HeroSection";
import { PopularGamesGrid } from "./popular-games/PopularGamesGrid";
import { GamesGrid } from "./games-section/GamesGrid";
import { ExtraInfo } from "./site-info/ExtraInfo";
import { SubscriptionsGrid } from "./subscriptions/SubscriptionsGrid";
import { PageLinks } from "./page-links/PageLinks";
//css
import "./HomePage.css";

type HomePageProps = {
  cart: cartItem[];
  products: Product[];
  loadCart: () => Promise<void>;
};
export function HomePage({ loadCart, cart, products }: HomePageProps) {
  const [subscriptions, setSubscriptions] = useState([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);
    return () => clearTimeout(timer);
  }, [search]);

  //fetch data
  useEffect(() => {
    const getSubscriptionsData = async () => {
      const response = await axios.get(
        "http://localhost:5000/api/subscriptions",
      );
      setSubscriptions(response.data.data);
    };
    getSubscriptionsData();
  }, []);

  //sort products
  const popularProducts = useMemo(
    () =>
      products.filter((product) => {
        return (
          product.type === "popular" &&
          product.name
            .toLocaleLowerCase()
            .includes(debouncedSearch.toLowerCase())
        );
      }),
    [debouncedSearch, products],
  );

  const regularProducts = useMemo(
    () =>
      products.filter((product) => {
        return (
          product.type !== "popular" &&
          product.name
            .toLocaleLowerCase()
            .includes(debouncedSearch.toLowerCase())
        );
      }),
    [debouncedSearch, products],
  );

  return (
    <>
      <title>OS Game Store</title>
      <Header setSearch={setSearch} cart={cart} />
      <NavigationBar />
      <div className="home-page">
        <HeroSection />
        <hr />
        <h2 className="title">Best Selling Games:</h2>
        <PopularGamesGrid
          loadCart={loadCart}
          popularProducts={popularProducts}
        />
        <h2 className="title">More Games:</h2>
        <GamesGrid loadCart={loadCart} regularProducts={regularProducts} />
        <hr />
        <h2 className="title">Try Our Premium Subscriptions</h2>
        <SubscriptionsGrid subscriptions={subscriptions} />
        <hr />
        <h2 className="title extra-info-title">More About Us</h2>
        <ExtraInfo />
        <PageLinks />
      </div>
    </>
  );
}
