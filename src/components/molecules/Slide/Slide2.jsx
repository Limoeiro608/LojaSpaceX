import { Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ImgSlideNasdaq from '../../../assets/img/slide-nasdaq.png'
import ImgSlideAmazon from '../../../assets/img/slide-amazon.png'
import ImgSlideApple from '../../../assets/img/slide-apple.png'
import ImgSlideNasa from '../../../assets/img/slide-nasa.png'
import ImgSlideIbm from '../../../assets/img/slide-ibm.png'


export const Slide2 = () => {
    return (
        <div className='container p-0'>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={58}
                slidesPerView={5}
                navigation
                pagination
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide><img src={ImgSlideNasdaq} alt='Slide 1' /></SwiperSlide>
                <SwiperSlide><img src={ImgSlideAmazon} alt='Slide 2' /></SwiperSlide>
                <SwiperSlide><img src={ImgSlideApple} alt='Slide 3' /></SwiperSlide>
                <SwiperSlide><img src={ImgSlideNasa} alt='Slide 4' /></SwiperSlide>
                <SwiperSlide><img src={ImgSlideIbm} alt='Slide 5' /></SwiperSlide>
                <SwiperSlide><img src={ImgSlideAmazon} alt='Slide 6' /></SwiperSlide>
                <SwiperSlide><img src={ImgSlideNasa} alt='Slide 7' /></SwiperSlide>
                <SwiperSlide><img src={ImgSlideNasdaq} alt='Slide 8' /></SwiperSlide>
            </Swiper>
        </div>
    )
}