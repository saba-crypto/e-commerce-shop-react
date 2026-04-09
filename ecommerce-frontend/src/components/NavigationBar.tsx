//data
import { navigationLinks } from "../data/navigationLinks";
//libs
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
//contexts
import { navBarContext } from "../contexts/navBarContext";
//css
import "./NavigationBar.css";

export function NavigationBar() {
  const navBarState = useContext(navBarContext);
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  return (
    <>
      <div
        className={`navigation-bar ${navBarState?.navBarToggle ? "reveal" : ""}`}
      >
        {navigationLinks.map((link) => {
          const isSelected = currentPath === link.urlPath ? "selected" : "";
          return (
            <div
              onClick={() => {
                if (!isSelected) {
                  navigate(link.urlPath);
                }
              }}
              className={`link-div ${isSelected}`}
            >
              <img src={link.image} alt="couldn't load image" />
              <p className="link">{link.name}</p>
            </div>
          );
        })}
      </div>
      <div
        onClick={() => {
          navBarState?.setNavBarToggle(false);
        }}
        className={`navigation-bar-background ${navBarState?.navBarToggle ? "reveal-bg" : ""}`}
      ></div>
    </>
  );
}
