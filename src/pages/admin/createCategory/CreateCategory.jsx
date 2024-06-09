import React from "react";

const CreateCategory = () => {
  return (
    <div className="createCategory">
      <div className="container">
        <div className="createCategory__wrapper">
          <p>createCategory</p>
          <form className="category__form">
            <input type="text" />
            <button>Create</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCategory;
