import React from "react";
import { RiEdit2Line } from "react-icons/ri";
import { useGetProductQuery } from "../../../context/productApi";
import productimg from "../../../assets/images/product.png";
import { RiDeleteBin6Line } from "react-icons/ri";

const ManageProduct = () => {
  const { data } = useGetProductQuery({ limit: 10, count: 2 });
  console.log(data);
  let product = data?.data?.map((el) => (
    <div key={el.id} className="card">
      <img src={productimg} alt="" />
      <div className="card__content">
        <p className="card__title">{el.title}</p>
        <div className="price__edit">
          <div className="price__wrapper">
            <strike>{el.price * 1.5}P</strike>
            <p>{el.price}P</p>
          </div>
          <div className="edit__wrapper">
            <button className="edit__svg">
              <RiEdit2Line />
            </button>

            <button className="delete__svg">
              <RiDeleteBin6Line />
            </button>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="manageProduct">
      <div className="container">
        <div className="manageProduct__wrapper">
          <p className="manageProduct__title">Manage product</p>
          <div className="manageProducts__cards">{product}</div>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
