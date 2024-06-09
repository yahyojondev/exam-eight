import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCartSharp } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import cartimg from "../../assets/images/product.png";

const Product = () => {
  const APIURL = "https://dummyjson.com/products";
  const [data, setData] = useState([]);
  const [count, setCount] = useState(8);
  useEffect(() => {
    axios
      .get(`${APIURL}?limit=${count}`)
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  const dataItem = data?.map((el) => (
    <div key={el.id} className="product__card">
      <div className="card__img__wrapper">
        <img src={cartimg} alt="" />
        <IoIosHeartEmpty />
      </div>
      <div className="card__content">
        <p className="card__title">{el.title}</p>
        <div className="price__cart">
          <div className="price__wrapper">
            <strike>{el.price * 1.5}P</strike>
            <span>{el.price}P</span>
          </div>
          <div className="cart">
            <IoCartSharp />
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="product">
      <div className="container">
        <div className="product__wrapper">
          <div className="product__top">
            <div className="product__title">
              <p>Популярные товары</p>
              <NavLink to={"/productall"} className="product__link">
                Все товары
                <FaArrowRightLong />
              </NavLink>
            </div>
            <ul className="product__category">
              <li onClick={() => setCount((p) => p + 2)}>Светильники</li>
              <li onClick={() => setCount((p) => p + 3)}>Люстры</li>
              <li onClick={() => setCount((p) => p + 5)}>Лампы</li>
              <li onClick={() => setCount((p) => p - 3)}>Настольные лампы</li>
              <li onClick={() => setCount((p) => p + 8)}>Ночники</li>
              <li onClick={() => setCount((p) => p + 1)}>Подстветка</li>
              <li onClick={() => setCount((p) => p - 2)}>Уличное освещение</li>
              <li onClick={() => setCount((p) => p + 2)}>
                Мебельные установки
              </li>
            </ul>
          </div>
          <div className="product__cards">{dataItem}</div>
          <div className="more__btn__wrapper">
            <button
              onClick={() => setCount((p) => p + 4)}
              className="more__btn"
            >
              See more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
