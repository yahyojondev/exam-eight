import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import brendimg1 from "../../assets/images/brend1.svg";
import brendimg2 from "../../assets/images/brend2.svg";
import brendimg3 from "../../assets/images/brend3.svg";
import brendimg4 from "../../assets/images/brend4.svg";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const Brend = () => {
  return (
    <div className="brend">
      <div className="container">
        <div className="brend__wrapper">
          <div className="brend__title">
            <p>Только проверенные бренды</p>
            <div className="navigate__wrapper">
              <FaArrowLeftLong />
              <FaArrowRightLong />
            </div>
          </div>
          <div className="brend__swiper">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper "
              id="brend__swiper__one"
            >
              <SwiperSlide className="swiper__slide">
                <img src={brendimg1} alt="" />
              </SwiperSlide>
              <SwiperSlide className="swiper__slide">
                <img src={brendimg2} alt="" />
              </SwiperSlide>
              <SwiperSlide className="swiper__slide">
                <img src={brendimg3} alt="" />
              </SwiperSlide>
              <SwiperSlide className="swiper__slide">
                <img src={brendimg4} alt="" />
              </SwiperSlide>
              <SwiperSlide className="swiper__slide">
                <img src={brendimg3} alt="" />
              </SwiperSlide>
              <SwiperSlide className="swiper__slide">
                <img src={brendimg1} alt="" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              spaceBetween={20}
              slidesPerView={2}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
              id="brend__swiper__two"
            >
              <SwiperSlide className="swiper__slide">
                <img src={brendimg1} alt="" />
              </SwiperSlide>
              <SwiperSlide className="swiper__slide">
                <img src={brendimg2} alt="" />
              </SwiperSlide>
              <SwiperSlide className="swiper__slide">
                <img src={brendimg3} alt="" />
              </SwiperSlide>
              <SwiperSlide className="swiper__slide">
                <img src={brendimg4} alt="" />
              </SwiperSlide>
              <SwiperSlide className="swiper__slide">
                <img src={brendimg3} alt="" />
              </SwiperSlide>
              <SwiperSlide className="swiper__slide">
                <img src={brendimg1} alt="" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              spaceBetween={20}
              slidesPerView={3}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
              id="brend__swiper__three"
            >
              <SwiperSlide className="swiper__slide">
                <img src={brendimg1} alt="" />
              </SwiperSlide>
              <SwiperSlide className="swiper__slide">
                <img src={brendimg2} alt="" />
              </SwiperSlide>
              <SwiperSlide className="swiper__slide">
                <img src={brendimg3} alt="" />
              </SwiperSlide>
              <SwiperSlide className="swiper__slide">
                <img src={brendimg4} alt="" />
              </SwiperSlide>
              <SwiperSlide className="swiper__slide">
                <img src={brendimg3} alt="" />
              </SwiperSlide>
              <SwiperSlide className="swiper__slide">
                <img src={brendimg1} alt="" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              spaceBetween={20}
              slidesPerView={4}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
              id="brend__swiper__four"
            >
              <SwiperSlide className="swiper__slide">
                <img src={brendimg1} alt="" />
              </SwiperSlide>
              <SwiperSlide className="swiper__slide">
                <img src={brendimg2} alt="" />
              </SwiperSlide>
              <SwiperSlide className="swiper__slide">
                <img src={brendimg3} alt="" />
              </SwiperSlide>
              <SwiperSlide className="swiper__slide">
                <img src={brendimg4} alt="" />
              </SwiperSlide>
              <SwiperSlide className="swiper__slide">
                <img src={brendimg3} alt="" />
              </SwiperSlide>
              <SwiperSlide className="swiper__slide">
                <img src={brendimg1} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brend;
