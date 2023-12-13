import { Carousel } from 'react-bootstrap';
import gal2 from '../assets/img/imgVilla/gal2.jpg'
import gal3 from '../assets/img/imgVilla/gal3.jpg'
import gal4 from '../assets/img/imgVilla/gal4.jpg'
import gal5 from '../assets/img/imgVilla/gal5.avif'
import gal6 from '../assets/img/imgVilla/gal6.jpg'

export const Galeria = () => {
  return (
    <div>
        <section className='galeria'>
        <div className='carusel'>
            <Carousel>
            <Carousel.Item>
                <img src={gal2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img src={gal3} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img src={gal4} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img src={gal5} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img src={gal6} alt="Third slide" />
            </Carousel.Item>
            </Carousel>
        </div>
        </section>
    </div>
  );
};
