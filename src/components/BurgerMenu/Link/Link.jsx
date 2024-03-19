import AnchorLink from "react-anchor-link-smooth-scroll";
import css from "./Link.module.css";

export const Link = ({ page }) => {
    return (
        <div className={css.linkWrapper}>
          <AnchorLink 
          className={css.link}
           href={`#`}
          >{page}</AnchorLink>
        </div>

    )
    }