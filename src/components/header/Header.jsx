import React, { useState, useEffect } from "react";
import { FiLoader } from "react-icons/fi";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { AiFillSignal } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { AiOutlineAlignRight } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import NavbarModuleSearching from "./NavbarModuleSearching";
import axios from "axios";

const Header = () => {
  const [see, setSee] = useState(false);
  const [more, setMore] = useState("");
  const [value, setValue] = useState("");
  const [data, setData] = useState(null);

  let API_URL = "https://dummyjson.com/products";
  useEffect(() => {
    if (!value.trim()) return;
    axios
      .get(`${API_URL}/search?q=${value.trim()}`)
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, [value]);
  return (
    <div className="navbar">
      <div className="container mediacontainer">
        <div className="navbar__wrapper">
          <NavLink className="to__home" to={"/"}>
            <button
              value={see}
              onClick={(e) => setSee((p) => !p)}
              className="burger__btn"
            >
              <AiOutlineAlignRight />
            </button>
            <div className="navbar__left">
              <div className="navbar__left__loader">
                <FiLoader />
              </div>
              <p>NORNLIGHT</p>
            </div>
          </NavLink>
          <div className="navbar__center">
            <button>
              <HiMiniBars3CenterLeft />
              Каталог
            </button>
            <div className="navbar__searching">
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Поиск по товарам"
                type="text"
              />
              <IoSearchOutline />
              {value.trim() ? <NavbarModuleSearching data={data} /> : <></>}
            </div>
          </div>
          <div className="navbar__right">
            <div className="navbar__right__img__wrapper">
              <FaRegHeart />
              <span>Избранное</span>
            </div>
            <div className="navbar__right__img__wrapper">
              <AiFillSignal />
              <span>Сравнение</span>
            </div>
            <div className="navbar__right__img__wrapper">
              <BsCart />
              <span>Корзина</span>
            </div>
            <FaRegHeart className="navbar__right__svg" />
            <BsCart className="navbar__right__svg" />
          </div>
        </div>
        <div className="media__center">
          <div className="media__searching">
            <input placeholder="Поиск по товарам" type="text" />
          </div>
        </div>
      </div>
      {see ? (
        <div className="navbar__burger__media">
          <button
            value={see}
            onClick={(e) => setSee((p) => !p)}
            className="close__burger"
          >
            <AiOutlineClose className="close" />
          </button>
          <ul className="navbar__burger__list">
            <li className="media__item">
              <a href="/about">О компании</a>
            </li>
            <li className="media__item">
              <a href="/payment">Доставка и оплата</a>
            </li>
            <li className="media__item">
              <a href="/return">Возврат</a>
            </li>
            <li className="media__item">
              <a href="/garant">Гарантии</a>
            </li>
            <li className="media__item">
              <a href="/contact">Контакты</a>
            </li>
            <li className="media__item">
              <a href="/blog">Блог</a>
            </li>
            <li>
              <a href="/catolog" className="media__btn">
                <HiMiniBars3CenterLeft />
                Каталог
              </a>
            </li>
            <li className="media__item">
              <a href="">8 (800) 890-46-56</a>
            </li>
            <li className="media__item">
              <a href="">Заказать звонок</a>
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Header;
