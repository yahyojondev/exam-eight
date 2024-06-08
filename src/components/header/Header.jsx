import React, { useState } from "react";
import { FiLoader } from "react-icons/fi";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { AiFillSignal } from "react-icons/ai";
import { BsCart } from "react-icons/bs";

const Header = () => {
  const [see, setSee] = useState("");
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__wrapper">
          <div className="navbar__left">
            <div className="navbar__left__loader">
              <FiLoader />
            </div>
            <p>NORNLIGHT</p>
          </div>
          <div className="navbar__center">
            <button>
              <HiMiniBars3CenterLeft />
              Каталог
            </button>
            <div className="navbar__searching">
              <input
                value={see}
                onChange={(e) => setSee(e.target.value)}
                placeholder="Поиск по товарам"
                type="text"
              />
              {see ? <></> : <IoSearchOutline />}
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
