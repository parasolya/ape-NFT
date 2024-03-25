import css from "../BurgerMenu/BurgerMenu.module.css";
import { Link } from "./Link/Link";
import useScroll from "../../hooks/useScroll";

const BurgerMenu = ({
  isTopOfPage,
  handleCloseMenu,
  isCloseMenu,
  selectedPage,
  setSelectedPage,
}) => {
  const isScrolling = useScroll();

  return (
    <nav className={css.wrapper}>
      {isCloseMenu && (
        <div className={css.linkList}>
          <Link
            page="About"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            isTopOfPage={isTopOfPage}
          />
          <Link
            page="M-map"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            isTopOfPage={isTopOfPage}
          />
          <Link
            page="Faq"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            isTopOfPage={isTopOfPage}
          />
          <Link
            page="Arts"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            isTopOfPage={isTopOfPage}
          />
          <Link
            page="Mint"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            isTopOfPage={isTopOfPage}
          />
        </div>
      )}
      <button
        className={`${css.navBtn}  ${!isTopOfPage ? css.isTopPage : ""}`}
        onClick={handleCloseMenu}
      >
        {!isCloseMenu ? "MENU" : "CLOSE"}
      </button>
    </nav>
  );
};

export default BurgerMenu;
