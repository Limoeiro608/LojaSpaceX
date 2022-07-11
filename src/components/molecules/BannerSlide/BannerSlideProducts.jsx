import { Navigation, Pagination } from 'swiper';
import 'swiper/css/virtual';
import { Swiper } from 'swiper/react';
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
                            slidesPerView: 2,
                        },
                        1200: {
                            width: 1200,
                            slidesPerView: 3,
                            spaceBetween:-220,
                        },
                        1400: {
                            width: 1400,
                            slidesPerView: 4,
                            spaceBetween:-220,
                        },
                    }}
                    modules={[Navigation, Pagination]}
                    spaceBetween={0}
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