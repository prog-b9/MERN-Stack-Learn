import React from "react";
import Header from "../../components/home/layout/Header";
import Footer from "../../components/home/layout/Footer";
import HomeProducts from "../../components/home/HomeProducts";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HomeProducts />
      <Footer />
    </div>
  );
};

export default HomePage;
