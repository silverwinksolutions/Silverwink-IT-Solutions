import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialSlider = ({ testimonials }) => {
    const getSlideClasses = (isActive, isNext, isPrev) => {
        const base = "transition-all duration-500 ease-in-out";
        if (isActive) return `${base} scale-105 shadow-xl z-30 opacity-100`;
        if (isNext || isPrev) return `${base} scale-100 z-20 opacity-90`;
        return `${base} scale-95 z-10 opacity-60`;
    };

    return (
        <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-4">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0b3130]">
                    What Our Clients Say
                </h2>
                <p className="text-gray-500 mt-3 text-base sm:text-lg max-w-xl mx-auto">
                    See what people think about our services and experience!
                </p>
            </div>

            {/* Swiper Wrapper */}
            <div className="relative ">
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={30}
                    centeredSlides={true}
                    slidesPerView={1.15}
                    navigation={{
                        nextEl: ".custom-swiper-button-next",
                        prevEl: ".custom-swiper-button-prev",
                    }}
                    pagination={{
                        el: '.custom-swiper-pagination',
                        clickable: true,
                    }}
                    loop
                    breakpoints={{
                        640: { slidesPerView: 1.15 },
                        768: { slidesPerView: 1.4 },
                        1024: { slidesPerView: 1.6 },
                    }}
                    className="testimonial-swiper"
                >
                    {testimonials.map((t, i) => (
                        <SwiperSlide key={i}>
                            {({ isActive, isPrev, isNext }) => (
                                <div
                                    className={`${getSlideClasses(
                                        isActive,
                                        isNext,
                                        isPrev
                                    )} w-full`}
                                >
                                    <article className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 h-full flex flex-col justify-between hover:scale-105 transition-all duration-300 cursor-pointer">
                                        <p className="text-gray-600 text-base sm:text-lg italic leading-relaxed mb-6 line-clamp-5">
                                            “{t.review}”
                                        </p>
                                        <div className="flex items-center gap-4 mt-auto pt-4">
                                            <img
                                                src={t.image}
                                                alt={t.name}
                                                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border border-gray-200"
                                            />
                                            <div>
                                                <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                                                    {t.name}
                                                </h3>
                                                <p className="text-xs text-gray-500 uppercase tracking-wide">
                                                    {t.position}
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <div className="custom-swiper-button-prev absolute top-1/2 -left-10 transform -translate-y-1/2 z-50 cursor-pointer text-gray-500 hover:text-blue-500 text-2xl select-none">
                    ❮
                </div>
                <div className="custom-swiper-button-next absolute top-1/2 -right-10 transform -translate-y-1/2 z-50 cursor-pointer text-gray-500 hover:text-blue-500 text-2xl select-none">
                    ❯
                </div>

                {/* Custom Pagination Dots */}
                <div className="custom-swiper-pagination flex justify-center mt-4 sm:mt-10 space-x-2" />
            </div>
        </div>
    );
};

export default TestimonialSlider;
