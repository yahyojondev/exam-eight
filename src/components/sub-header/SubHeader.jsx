import React from "react";
import { NavLink } from "react-router-dom";

const SubHeader = () => {
  return (
    <div className="navbartop">
      <div className="container">
        <div className="navbartop__wrapper">
          <ul className="navbartop__list">
            <li>
              <NavLink to={"/about"}>О компании</NavLink>
            </li>
            <li>
              <NavLink to={"/payment"}>Доставка и оплата</NavLink>
            </li>
            <li>
              <NavLink to={"/return"}>Возврат</NavLink>
            </li>
            <li>
              <NavLink to={"/garant"}>Гарантии</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Контакты</NavLink>
            </li>
            <li>
              <NavLink to={"/blog"}>Блог</NavLink>
            </li>
          </ul>
          <div className="navabtop__right">
            <p>8 (800) 890-46-56</p>
            <span>Заказать звонок</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
