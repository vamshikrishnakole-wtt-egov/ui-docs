import React from "react";
import Banner from "../common/Banner";
import BannerImg from "../../assets/img/banner.png";

const HomeBanner = () => {
  return (
    <>
      <Banner
        heading="Design your service using DIGIT styles, components and patterns"
        para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        Image ={BannerImg}
      />
    </>
  );
};

export default HomeBanner;
