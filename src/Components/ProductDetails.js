import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProductsAction,
  removeProductsAction,
} from "../Redux/Actions/ProductActions";
import { Box, Stack, Card, Button } from "@mui/material";

const ProductDetails = () => {
  const productdetail = useSelector((state) => state.SELECTEDREDUCER);
  const { image, price, description, category, title } = productdetail;
  const { productid } = useParams();
  console.log(productdetail);
  const dispatch = useDispatch();
  const fetchProductDetail = async () => {
    const responseDetail = await axios.get(
      `https://fakestoreapi.com/products/${productid}`
    );
    dispatch(selectedProductsAction(responseDetail.data));
  };
  useEffect(() => {
    if (productid && productid !== "") fetchProductDetail();
    return () => {
      dispatch(removeProductsAction());
    };
  }, [productid]);
  return (
    <>
      {Object.keys(productdetail).length === 0 ? (
        <h2>LOADING....</h2>
      ) : (
        <Box
          style={{ width: "550px", height: "450px", margin: "auto" }}
          sx={{ alignItems: "center" }}
        >
          <Card style={{ display: "flex", padding: "30px" }}>
            <img
              src={image}
              style={{ height: "200px", marginRight: "20px", width: "200px" }}
            />
            <div>
              <Stack style={{ fontSize: "25px" }}>{title}</Stack>
              <Stack style={{ fontSize: "20px" }}>Rs.{price}</Stack>
              <Stack style={{ fontSize: "20px" }}>{category}</Stack>
              <br />
              <Stack spacing={4}>
                <Stack style={{ color: "GrayText" }}>{description}</Stack>
                <Button
                  color="secondary"
                  variant="contained"
                  sx={{ width: "150px" }}
                >
                  Add to Cart
                </Button>
              </Stack>
            </div>
          </Card>
        </Box>
      )}
    </>
  );
};

export default ProductDetails;
