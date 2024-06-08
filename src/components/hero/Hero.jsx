import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import heroimages from "../../assets/images/heroimg.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__Container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper  myswiper"
        >
          <SwiperSlide className="hero__slide">
            <div className="container">
              <div className="slide__wrapper">
                <div className="hero__slide__left">
                  <h1>
                    Скидка 15% <br /> на все подвесные светильники
                  </h1>
                  <button>до 5 февраля</button>
                </div>
                <img src={heroimages} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="hero__slide">
            <div className="container">
              <div className="slide__wrapper">
                <div className="hero__slide__left">
                  <h1>
                    Скидка 15% <br /> на все подвесные светильники
                  </h1>
                  <button>до 5 февраля</button>
                </div>
                <img src={heroimages} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="hero__slide">
            <div className="container">
              <div className="slide__wrapper">
                <div className="hero__slide__left">
                  <h1>
                    Скидка 15% <br /> на все подвесные светильники
                  </h1>
                  <button>до 5 февраля</button>
                </div>
                <img src={heroimages} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="hero__slide">
            <div className="container">
              <div className="slide__wrapper">
                <div className="hero__slide__left">
                  <h1>
                    Скидка 15% <br /> на все подвесные светильники
                  </h1>
                  <button>до 5 февраля</button>
                </div>
                <img src={heroimages} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="hero__slide">
            <div className="container">
              <div className="slide__wrapper">
                <div className="hero__slide__left">
                  <h1>
                    Скидка 15% <br /> на все подвесные светильники
                  </h1>
                  <button>до 5 февраля</button>
                </div>
                <img src={heroimages} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="hero__slide">
            <div className="container">
              <div className="slide__wrapper">
                <div className="hero__slide__left">
                  <h1>
                    Скидка 15% <br /> на все подвесные светильники
                  </h1>
                  <button>до 5 февраля</button>
                </div>
                <img src={heroimages} alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
