import React from "react";

const NavbarModuleSearching = ({ data }) => {
  let serachitem = data?.map((el) => (
    <li key={el.id}>
      <img src={el.images[0]} alt="" />
      <p>{el.title}</p>
    </li>
  ));
  return (
    <div className="navbar__search__result">
      <ul className="search__list">{serachitem}</ul>
    </div>
  );
};

export default NavbarModuleSearching;
