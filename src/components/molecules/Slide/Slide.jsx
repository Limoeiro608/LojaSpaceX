import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ImgSlide1 from '../../../assets/img/slide-1.png'
import { Container } from 'reactstrap';

export const Slide = () => {
    return (
        <Container>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide><img src={ImgSlide1} alt='Slide 1' /></SwiperSlide>
                <SwiperSlide><img src='https://dummyimage.com/1366x400/a348a3/fff.png&text=slide+2' alt='Slide 2' /></SwiperSlide>
                <SwiperSlide><img src='https://dummyimage.com/1366x400/1b0ec9/fff.png&text=slide+3' alt='Slide 3' /></SwiperSlide>
            </Swiper>
        </Container>
    )
}