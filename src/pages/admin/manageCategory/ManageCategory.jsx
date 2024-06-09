import React from "react";
import { useGetCategoryQuery } from "../../../context/categoryApi";

const ManageCategory = () => {
  const { data: categories } = useGetCategoryQuery();
  let categoryItem = categories?.data?.map((el) => (
    <li key={el.id}>{el.title}</li>
  ));
  return (
    <div className="manageCategory">
      <div className="container">
        <div className="manageCategory__wrapper">
          <p>ManageCategoory</p>
          <ul className="manageCtegory__list">{categoryItem}</ul>
        </div>
      </div>
    </div>
  );
};

export default ManageCategory;
