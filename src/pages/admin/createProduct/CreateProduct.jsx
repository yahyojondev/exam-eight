import { Button } from "@mui/material";
import React, { useState } from "react";
import { useCreateProductMutation } from "../../../context/productApi";
import { useGetCategoryQuery } from "../../../context/categoryApi";
let unitsData = ["kg", "metr", "litr", "dona"];
const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [units, setUnits] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState([]);

  const { data: Categories } = useGetCategoryQuery();
  const [createProduct] = useCreateProductMutation();

  let categoryItem = Categories?.data?.map((el) => (
    <option key={el.id} value={el.title}>
      {el.title}
    </option>
  ));
  let unitItem = unitsData?.map((el) => (
    <option key={el} value={el}>
      {el}
    </option>
  ));
  console.log(Array.from(files));

  const handleCreateProduct = (e) => {
    e.preventDefault();
    let productForm = new FormData();
    productForm.append("title", title);
    productForm.append("price", price);
    productForm.append("category", category);
    productForm.append("units", units);
    productForm.append("oldPrice", 150);
    productForm.append("description", description);
    productForm.append("info", {});
    Array.from(files).forEach((el) => {
      productForm.append("files", el, el.name);

      createProduct(productForm);
    });
    // let product = {
    //   title,
    //   price,
    //   category,
    //   units,
    //   description,
    //   info: {},
    //   files,
    // };
  };
  return (
    <div className="createProduct">
      <div className="container">
        <div className="createProduct__wrapper">
          <p className="createProduct__title">Create product</p>
          <form className="createProduct__form">
            <div className="input__form">
              <span>Title</span>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
              />
            </div>
            <div className="input__form">
              <span>Price</span>
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="number"
              />
            </div>
            <div className="input__form">
              <span>Image-url</span>
              <div className="input__file">
                <input
                  onChange={(e) => setFiles(e.target.files)}
                  multiple
                  accept=".png, .jpg, .svg, .jpeg, .heic"
                  type="file"
                />
                <div>
                  {Array.from(files)
                    ?.map((el) => URL.createObjectURL(el))
                    ?.map((el) => (
                      <img key={el} src={el} width={100} alt="" />
                    ))}
                </div>
              </div>
            </div>
            <div className="input__form">
              <span>Category</span>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                name=""
                id=""
              >
                <option value="tanlang">tanlang</option>
                {categoryItem}
              </select>
            </div>
            <div className="input__form">
              <span>Desc</span>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                name=""
                id=""
              ></textarea>
            </div>
          </form>
          <Button onClick={handleCreateProduct} variant="contained">
            Create
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
