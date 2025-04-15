import styles from './mainVisual.module.css'
import Swiper from 'swiper';
// import '@swiper/css';

const swiper = new Swiper('.swiper', { 
    slidesPerView: 1, 
    spaceBetween: 30, 
  });

export default function MainVisual(){
    return(
        <section className={styles.mainvisual}>
            {/* <h1>Main Visual</h1> */} 
            <div className="swiper"> 
                <div className="swiper-wrapper"> 
                    <div className="swiper-slide"> 
                        <h1 className={styles.testkelas}>Lorem Ipsum Et Dolor Sit Amet</h1>
                    </div>
                    <div className="swiper-slide">Slide 2</div>
                    <div className="swiper-slide">Slide 3</div> 
                </div> 
                <div className="swiper-pagination"></div>
 
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
 
                <div className="swiper-scrollbar"></div>
            </div>
        </section>
    );
}