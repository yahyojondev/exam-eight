import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { RiEdit2Line } from "react-icons/ri";
import { MdOutlineLogout } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div className="admin">
      <div className="admin__wrapper">
        <div className="admin__top">
          <div className="admin__top__title">
            <FaArrowLeftLong />
            <p>Admin Dashboard</p>
          </div>
          <ul className="admin__top__content">
            <li className="admin__list__item">
              <NavLink to={"createProduct"}>
                <AiOutlineAppstoreAdd />
                Create product
              </NavLink>
            </li>
            <li className="admin__list__item">
              <NavLink to={"manageProduct"}>
                <RiEdit2Line />
                Manage product
              </NavLink>
            </li>
            <li className="admin__list__item">
              <NavLink to={"createCategory"}>
                <AiOutlineAppstoreAdd />
                Create category
              </NavLink>
            </li>
            <li className="admin__list__item">
              <NavLink to={"manageCategory"}>
                <RiEdit2Line />
                Manage category
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink to={"/"} className="admin__bottom">
          <MdOutlineLogout />
          <p>Log out</p>
        </NavLink>
      </div>
      <div className="admin__content">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
