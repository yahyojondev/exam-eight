import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { norlightproducts } from "../../static/router";
import { NavLink } from "react-router-dom";

const Norlight = () => {
  const norlightitem = norlightproducts?.map((el) => (
    <div key={el.id} className="norlight__card">
      <div className="norlight__card__img__wrapper">
        <img src={el.img} alt={el.title} />
      </div>
      <div className="norlight__card__content">
        <p>{el.title}</p>
        <span>{el.text}</span>
      </div>
    </div>
  ));

  return (
    <div className="norlight">
      <div className="container">
        <div className="norlight__wrapper">
          <div className="norlight__title">
            <p>Почему NORNLIGHT?</p>
            <NavLink to={"/about"} className="about__tobtn">
              О компании
              <FaArrowRightLong />
            </NavLink>
          </div>
          <div className="norlight__cads__to">
            <div className="norlight__cards">{norlightitem}</div>
            <NavLink to={"/about"} className="norlight__btn">
              О компании
              <FaArrowRightLong />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Norlight;
