import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { katolofproducts } from "../../static/router";
import { NavLink } from "react-router-dom";

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
        </div>
      </div>
    </div>
  );
};

export default Katolog;
