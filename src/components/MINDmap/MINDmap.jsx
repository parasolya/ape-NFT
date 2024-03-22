import css from "../MINDmap/MINDmap.module.css";
import upLeftArrow from "../../assets/up-left-arrow.svg"


const MINDmap = () => {
    return (
        <section className={css.section}>
        
        <h1 className={css.title}>MIND map</h1>
        
        <div className={css.gridContainer}>

        <div className={css.containerItem}>
  <p className={css.upperElement}>All owners of APE NFTs and all future collections will receive a percentage of sales based on the number of NFTs they own</p>
  <p className={css.lowerElement}>YAPE DROP</p>
</div>
<div className={css.containerItem}>
  <p className={css.upperElement}>Launch of the 2nd YACHT Collection Releasing the first version of the Ape Slam Game</p>
  <p className={css.lowerElement}>New Collection</p>
</div>
<div className={css.containerItem}>
  <p className={css.upperElement}>Launch your own token, the proceeds of which will go to a global fund to LAUNCH YACHT CLUB AND PROMOTE it</p>
  <p className={css.lowerElement}>Token</p>
</div>
<div className={`${css.containerItem} ${css.addColor}`}>
  <img className={`${css.upperElement} ${css.upLeftArrow}`} src={upLeftArrow} alt="up Left Arrow"/>
  <p className={css.lowerElement}>Learn <br/>more <br/>in mind map</p>
</div>


</div>
        </section>
    )
};

export default MINDmap;