import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const BannerSlideProducts = (props) => {
    return (
        <div className='container'>
            <div className='BannerSlideProducts'>
                <h3 className='BannerSlideProducts-title'>{props.title}</h3>
                <Swiper
                    breakpoints={{
                            992: {
                                width: 992,
                                slidesPerView: 1,
                            },
                            1200: {
                                width: 1200,
                                slidesPerView: 4,
                            },
                        }}
                    modules={[Navigation, Pagination]}
                    spaceBetween={40}
                    navigation
                    loop={true}
                    slidesPerView={1}
                >
                    {props.children}
                </Swiper>
            </div>
        </div>
    )
}