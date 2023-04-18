import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { Grid } from "@mui/material";

import { setProductsAction } from "../Redux/Actions/ProductActions";

const ProductsList = () => {
  const products = useSelector((state) => state);
  const { id, title, desc } = products;
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const responseProducts = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log("Error", err));
    // console.log("RESPONSE", responseProducts.data);
    dispatch(setProductsAction(responseProducts.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  // console.log("PRODUCTS", products);
  return (
    <h1>
      <Grid
        container
        spacing={4}
        style={{
          justifyContent: "space-around",
          padding: "30px",
          marginBottom: "100px",
        }}
      >
        <ProductComponent />
      </Grid>
    </h1>
  );
};

export default ProductsList;
