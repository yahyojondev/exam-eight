import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { catolofproducts } from "../../static/router";
import Blok from "../../components/blok/Blok";
import Brend from "../../components/brend/Brend";
import Story from "../../components/story/Story";
const Catolog = () => {
  const katologitem = catolofproducts?.map((el) => (
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
    <>
      <div className="catolog">
        <div className="katolog">
          <div className="container">
            <div className="katolog__wrapper">
              <div className="katolog__title">
                <p>Каталог</p>
              </div>
              <div className="katolog__cards">{katologitem}</div>
            </div>
          </div>
        </div>
      </div>
      <Brend />
      <Blok />
      <Story />
    </>
  );
};

export default Catolog;
