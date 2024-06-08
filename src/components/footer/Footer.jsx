import React from "react";
import { LuLoader } from "react-icons/lu";
import footerimg from "../../assets/images/footervisa.svg";
import { NavLink } from "react-router-dom";
import vkimg from "../../assets/images/vk.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__wrapper__left">
            <div className="footer__left__left">
              <div className="footer__left__title__wrapper">
                <LuLoader />
                <p>NORNLIGHT</p>
              </div>
              <div className="footer__left__left__content">
                <span>8 (800) 890-46-56</span>
                <img src={footerimg} alt="" />
                <NavLink>Политика конфидециальности</NavLink>
                <NavLink>Пользовательское соглашение</NavLink>
                <div className="footer__left__images">
                  <img src={vkimg} alt="" />
                  <img src={vkimg} alt="" />
                  <img src={vkimg} alt="" />
                </div>
              </div>
            </div>
            <div className="footer__left__right">
              <p>Покупателям</p>
              <ul className="footer__left__right__list">
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
            </div>
          </div>
          <div className="footer__wrapper__right">
            <div className="footer__right__left">
              <p>Товары</p>
              <ul className="footer__right__left__list">
                <li>
                  <NavLink>Люстры</NavLink>
                </li>
                <li>
                  <NavLink>Светильники</NavLink>
                </li>
                <li>
                  <NavLink>Бра</NavLink>
                </li>
                <li>
                  <NavLink>Торшеры</NavLink>
                </li>
                <li>
                  <NavLink>Комплектуюшие</NavLink>
                </li>
                <li>
                  <NavLink>Настольные лампы</NavLink>
                </li>
              </ul>
            </div>
            <div className="footer__right__left">
              <p></p>
              <ul className="footer__right__left__list footer__right">
                <li>
                  <NavLink>Споты</NavLink>
                </li>
                <li>
                  <NavLink>Трековые светильники</NavLink>
                </li>
                <li>
                  <NavLink>Уличные светильники</NavLink>
                </li>
                <li>
                  <NavLink>Технические светильники</NavLink>
                </li>
                <li>
                  <NavLink>Светодиодные ленты</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
