import css from "../../MINDmap/MINDmap.module.css";


const MINDmapItem = ({ upperText, lowerText }) => {
    return (
        <div className={css.containerItem}>
        <p className={css.upperElement}>
          {upperText}
        </p>
        <p className={css.lowerElement}>{lowerText}</p>
      </div>
      );
    };
    
    export default MINDmapItem;