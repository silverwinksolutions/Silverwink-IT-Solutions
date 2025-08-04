import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const AutoSlider = ({ slides }) => {
    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1435: { slidesPerView: 4 },
            }}
        >
            {slides.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="flex flex-col  items-center text-center bg-white/5 backdrop-blur-md rounded-4xl  py-5 px-5 h-[350px] justify-around transition duration-300 group cursor-pointer">
                        {/* Image */}
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-28 h-28 transition-transform duration-300 group-hover:scale-120"
                            loading="lazy"
                        />

                        {/* Title */}
                        <h3 className="text-white text-2xl">{item.title}</h3>

                        {/* Description */}
                        <p className="text-white text-lg opacity-80">{item.description}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default AutoSlider;
