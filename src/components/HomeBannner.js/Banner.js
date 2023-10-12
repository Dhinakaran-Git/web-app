import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import { getBannerLinks } from "../../services/bannerService";
import { Box } from "@mui/material";

const Banner = () => {
  const [banners, setBanners] = useState([]);

  const settings = {
    infinite: true,
    speed: 500,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    getBannerLinks().then((data) => setBanners(data));
  }, []);

  return (
    <div>
      <Slider {...settings}>
        {banners.map((data, index) => (
          <div key={index}>
            <Box
              component="img"
              sx={{
                height: '100%',
                width: '100%',
               
              }}
              alt=""
              src={data.image_name}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
