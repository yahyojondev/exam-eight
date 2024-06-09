import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { blokproducts } from "../../static/router";
import { NavLink } from "react-router-dom";

const Blok = () => {
  const blokitem = blokproducts?.map((el) => (
    <div key={el.id} className="blok__card">
      <img src={el.img} alt="" />
      <div className="blok__card__content">
        <div className="card__top">
          <p>{el.title}</p>
          <GoArrowUpRight />
        </div>
        <span>{el.text}</span>
      </div>
      <hr />
    </div>
  ));

  return (
    <div className="blok">
      <div className="container">
        <div className="blok__wrapper">
          <div className="blok__title">
            <p>Блог</p>
            <NavLink to={"/blog"} className="blok__btn">
              <button className="blok__btn">
                Перейти в блог
                <FaArrowRightLong />
              </button>
            </NavLink>
          </div>
          <div className="blok__cards">{blokitem}</div>
        </div>
      </div>
    </div>
  );
};

export default Blok;
