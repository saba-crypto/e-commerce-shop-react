import "./HeroSection.css";
export function HeroSection() {
  const scrollToPopularGames = () => {
    const popularGamesGrid = document.querySelector(".js-popular-games-grid");
    popularGamesGrid?.scrollIntoView({ block: "end" });
  };
  return (
    <>
      <section className="hero-section first-segment">
        <div className="ml-20">
          <h1 className="brand-name">OS GAME STORE</h1>
        </div>

        <div className="introduction">
          <div className="upper-text">
            <div className="first-text-div">
              <h2 className="first-text">
                Want to buy an old school colorful and optimized games?
              </h2>
            </div>
            <img
              className="gamepad-image"
              src="/Images/gamepad-image.jpeg"
              alt=""
            />
          </div>
          <div className="additional-text-div">
            <h2 className="additional-text">
              OS GAME STORE is Trusted Across The World! We Offer You Unlimited
              Fun And Unique Games
            </h2>
          </div>
          <div className="first-segment-buttons">
            <button
              onClick={scrollToPopularGames}
              className="buy-button js-buy-now-button"
            >
              Buy Now
            </button>
            <button className="sign-up-button">Sign Up</button>
          </div>
        </div>
      </section>
    </>
  );
}
