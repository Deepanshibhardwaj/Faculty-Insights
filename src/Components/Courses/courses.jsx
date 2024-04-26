import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import'./courses.css';
import data from '../../utils/slider.json';
import SwiperCore, { Navigation, Pagination, EffectFade } from 'swiper';
SwiperCore.use([Navigation, Pagination, EffectFade]);

const Courses = () => {
    return (
        <section className="c-wrapper">
            <div className="paddings innerWidth c-container">
                <div className="c-head flexColStart">
                    <span className="text">Courses Offered</span>
                </div>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={4}
                    navigation
                    direction="horizontal"
                    pagination={{ clickable: true }}
                >
                    {data.map((card, i) => (
                        <SwiperSlide key={i}>
                            <div className=" flexColStart c-card">
                                <img src={card.image} alt="Course" />
                                <div className="course-details">
                                    <h2 className="text">{card.name}</h2>
                                    <p className="secondaryText">{card.detail}</p>
                                 
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Courses;
