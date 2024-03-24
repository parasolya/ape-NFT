import AnchorLink from "react-anchor-link-smooth-scroll";
import css from "./Link.module.css";

export const Link = ({ page, isTopOfPage, setSelectedPage, selectedPage, setIsMenuToggled }) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "").replace(/-/g, "");
    return (
        <div className={`${css.linkWrapper}  ${!isTopOfPage ? css.isTop : ""}`}>
          {/* className={`${(selectedPage === lowerCasePage) ? "text-primary-500" : ''}  */}
     
          
          <AnchorLink 
          className={`${css.link}  ${!isTopOfPage ? css.isTopPage : ""}`}
          href={`#${lowerCasePage}`}
          onClick={() => {setSelectedPage(lowerCasePage);
            setIsMenuToggled(false)}}
          >{page}</AnchorLink>
        </div>

    )
    }

