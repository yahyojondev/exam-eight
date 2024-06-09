import React from "react";

const NotFound = () => {
  return (
    <div className="notfound">
      <div className="container">
        <div className="notfound__wrapper">
          <p>404</p>
          <div className="notfound__text__wrapper">
            <span>Похоже, ничего не нашлось :(</span>
            <button>На главную</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
