import { AppBar, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";
import React from "react";

const Header = () => {
  // const navLinkStyles = ({ isActive }) => {
  //   return {
  //     textDecoration: isActive ? "none" : "underline",
  //   };
  // };
  return (
    <AppBar>
      <Toolbar
        style={{ backgroundColor: "#64284d", justifyContent: "space-between" }}
      >
        <h1>Header</h1>
        <h3>
          <NavLink
            to="/productList"
            style={{ color: "White", textDecoration: "none" }}
          >
            Products
          </NavLink>
        </h3>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
