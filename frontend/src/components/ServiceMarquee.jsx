import React from "react";
import Marquee from "react-fast-marquee";
import dawn from '../assets/dawn.png';

const services = [
    "Web Development",
    "App Design",
    "MERN Stack",
    "UI/UX",
    "SEO",
    "Backend API",
    "Frontend Animation",
];

const ServiceMarquee = () => {
    const marqueeItems = [];
    services.forEach((service, index) => {
        marqueeItems.push(
            <span
                key={`text-${index}`}
                className="text-[#0b3130] font-semibold mx-4 whitespace-nowrap
                   text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
                aria-label={service}
            >
                {service}
            </span>
        );
        marqueeItems.push(
            <img
                key={`img-${index}`}
                src={dawn}
                alt=""
                aria-hidden="true"
                className="mx-4 h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 object-contain"
            />
        );
    });

    return (
        <div className="py-6 bg-white">
            <Marquee gradient={false} speed={100} pauseOnHover>
                <div className="flex items-center">
                    {marqueeItems}
                </div>
            </Marquee>
        </div>
    );
};

export default ServiceMarquee;
