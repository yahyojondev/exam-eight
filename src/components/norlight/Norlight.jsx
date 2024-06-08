import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { norlightproducts } from "../../static/router";

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
            <button>
              О компании
              <FaArrowRightLong />
            </button>
          </div>
          <div className="norlight__cards">{norlightitem}</div>
        </div>
      </div>
    </div>
  );
};

export default Norlight;
