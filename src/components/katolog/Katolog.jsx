import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { katolofproducts } from "../../static/router";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const Katolog = () => {
  const katologitem = katolofproducts?.map((el) => (
    <div key={el.id} className="katolog__card">
      <div className="card__title">
        <p>{el.title}</p>
        <span>
          {el.text}
          <FaArrowRightLong />
        </span>
      </div>
      <img src={el.img} alt="" />
    </div>
  ));

  const katologsliderswiper = katolofproducts?.map((el) => (
    <SwiperSlide key={el.id}>
      <div className="katolog__card katolog__swiper__card">
        <p>{el.title}</p>
        <img src={el.img} alt="" />
        <span>
          {el.text}
          <FaArrowRightLong />
        </span>
        <NavLink to={"/catolog"} className="swiper__btn">
          Весь каталог <FaArrowRightLong />
        </NavLink>
      </div>
    </SwiperSlide>
  ));

  return (
    <div className="katolog">
      <div className="container">
        <div className="katolog__wrapper">
          <div className="katolog__title">
            <p>Каталог</p>
            <NavLink className="katolog__btn" to={"/catolog"}>
              <button className="katolog__btn">
                Весь каталог
                <FaArrowRightLong />
              </button>
            </NavLink>
          </div>
          <div className="katolog__cards">{katologitem}</div>
          {/* swiper */}

          <div className="container">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              loop={true}
              slidesPerView={2}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
              id="swiper__one"
            >
              {katologsliderswiper}
            </Swiper>
            <Swiper
              spaceBetween={20}
              centeredSlides={true}
              loop={true}
              slidesPerView={3}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
              id="swiper__three"
            >
              {katologsliderswiper}
            </Swiper>
          </div>
          {/* swiper */}
        </div>
      </div>
    </div>
  );
};

export default Katolog;
