import { Carousel, ConfigProvider } from "antd";
import React from "react";

function CarouselMain() {
  //   const contentStyle: React.CSSProperties = {
  //     margin: 0,
  //     height: "160px",
  //     color: "#fff",
  //     lineHeight: "160px",
  //     textAlign: "center",
  //     background: "#364d79",
  //   };

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
          autoplay
          style={{ marginBottom: 32 }}>
          <div>
            <img
              src="assets/images/1.jpg"
              alt="banner 1"
              style={{ width: "100%", height: "80vh", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src="assets/images/2.jpg"
              alt="banner 2"
              style={{ width: "100%", height: "80vh", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src="assets/images/3.jpg"
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
