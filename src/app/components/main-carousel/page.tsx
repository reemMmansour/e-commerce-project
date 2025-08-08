import { Carousel, ConfigProvider } from "antd";
import React from "react";
import "./style.css";

function CarouselMain() {
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Carousel: {
              dotWidth: 30,
              dotHeight: 30,
              dotActiveWidth: 50,
            },
          },
        }}>
        <Carousel
          className="carousel-main-home"
          autoplay
          style={{ marginBottom: 32 }}>
          <div>
            <img
              src="assets/images/carousel-image/carousel-2.jpg"
              alt="banner 1"
              style={{ width: "100%", height: "80vh", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src="assets/images/carousel-image/carousel-1.jpg"
              alt="banner 2"
              style={{ width: "100%", height: "80vh", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src="assets/images/carousel-image/carousel-3.jpg"
              alt="banner 3"
              style={{ width: "100%", height: "80vh", objectFit: "cover" }}
            />
          </div>
        </Carousel>
      </ConfigProvider>
    </>
  );
}

export default CarouselMain;
