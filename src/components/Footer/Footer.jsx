
import css from './Footer.module.css'; // Доданий імпорт модуля стилів



const Footer = () => {
    
    return (
        <div>
            
            <button className={css.prev} >
                Prev
            </button>
            <button className={css.next} >
                Next
            </button>
        </div>
    );
};

export default Footer;