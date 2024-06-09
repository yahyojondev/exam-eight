import { Button } from "@mui/material";
import React from "react";

const CreateProduct = () => {
  return (
    <div className="createProduct">
      <div className="container">
        <div className="createProduct__wrapper">
          <p className="createProduct__title">Create product</p>
          <form className="createProduct__form">
            <div className="input__form">
              <span>Title</span>
              <input type="text" />
            </div>
            <div className="input__form">
              <span>Price</span>
              <input type="text" />
            </div>
            <div className="input__form">
              <span>Image-url</span>
              <div className="input__file">
                <input type="file" />
              </div>
            </div>
            <div className="input__form">
              <span>Category</span>
              <select name="" id="">
                <option value="tanlang">tanlang</option>
              </select>
            </div>
            <div className="input__form">
              <span>Desc</span>
              <textarea name="" id=""></textarea>
            </div>
          </form>
          <Button variant="contained">Create</Button>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
