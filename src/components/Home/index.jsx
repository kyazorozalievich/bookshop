import React, { useState } from "react";
import Product from "../Product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bookshop from '../../assets/images/bookshop.webp'
import HomeCategory from "../HomeCategory";

const Home = () => {

  
 
  return (
    <>
      <div style={{
        backgroundImage: `url(${bookshop})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "500px",
        paddingTop: "100px",
        paddingBottom: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}> </div>
      <HomeCategory/>
      <Product />
    </>
  );
};

export default Home;
