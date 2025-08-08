"use client";

// import styles from "../page.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Row, Col, Button } from "antd";
import { useRouter } from "next/navigation";
import CarouselMain from "../components/main-carousel/page";
import { HeartOutlined } from "@ant-design/icons";
import "./style.css";
import { AiOutlineEye } from "react-icons/ai";
const { Meta } = Card;

interface Product {
  id: number;
  name: { en: string; ar: string };
  description: { en: string; ar: string };
  price: number;
  image: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  const fetchProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <CarouselMain />
      <div className="product-page">
        <Row
          gutter={[24, 24]}
          justify="start">
          {products.map((pro) => (
            <Col
              key={pro.id}
              xs={24}
              sm={12}
              md={8}
              lg={6}>
              <Card
                className="product-card"
                hoverable
                cover={
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    alt={pro.name.en}
                    src={pro.image}
                    style={{ height: 260, objectFit: "cover" }}
                  />
                }
                actions={[
                  <AiOutlineEye
                    key="view"
                    type="link"
                    size={18}
                    onClick={() => router.push(`/product/${pro.id}`)}
                  />,
                  <HeartOutlined
                    key="favourite"
                    type="link"
                    onClick={() => router.push(`/favourites`)}
                  />,
                ]}>
                <Meta
                  title={`${pro.name.ar} - $${pro.price}`}
                  description={pro.description.ar.slice(0, 60) + "..."}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
