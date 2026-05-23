import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { sliderItem } from '../data/slider';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
  return (
    <div className="slider">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={0}
        observer
        observeParents
        breakpoints={{
          0 : {slidesPerView: 1},
          660 : {slidesPerView: 1.1},
          1000 : {slidesPerView: 1.5},
          }}
        centeredSlides
      
        speed={500}
      
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      
        loop
        loopedSlides={sliderItem.length}
      >
        {sliderItem.map(slide => 
          <SwiperSlide key={slide}>
            {<img src={`/slider/${slide}`}/>}
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

export default Slider;