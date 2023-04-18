import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  // const products = useSelector((state) => state.PRODUCTREDUCER.products);

  const products = useSelector((state) => state.PRODUCTREDUCER.products);

  const renderProductList = products.map((product) => {
    const { id, image, title, price, description } = product;

    return (
      <Link
        to={`/productdetail/${id}`}
        style={{ textDecoration: "none" }}
        key={id}
      >
        <Card
          sx={{
            maxWidth: 345,
            maxHeight: 365,
            marginBottom: 5,
            ":hover": { boxShadow: 20, transform: "scale3d(1.05, 1.05, 1)" },
          }}
        >
          <CardMedia
            sx={{ height: "200px", width: "300px", padding: "3px" }}
            image={image}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" fontSize={16}>
              {title}
            </Typography>
            <Typography gutterBottom variant="h5" component="div" fontSize={16}>
              Rs.{price}
            </Typography>
            {/* <Typography variant="body2" color="text.secondary" fontSize={16}>
            {description}
          </Typography> */}
          </CardContent>
          <CardActions>
            <Button size="large" color="secondary">
              Share
            </Button>
            <Button size="large" color="secondary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Link>
    );
  });

  // console.log("FETCHEDPRODUCTS", products);
  return <>{renderProductList}</>;
};

export default ProductComponent;
