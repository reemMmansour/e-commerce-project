/* eslint-disable @next/next/no-img-element */
"use client";

import { Layout, Button, Space, Badge, Drawer, Menu } from "antd";
import {
  ShoppingCartOutlined,
  UnorderedListOutlined,
  MenuOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "./style.css";
const { Header: AntHeader } = Layout;

export default function Header() {
  const [lang, setLang] = useState<"en" | "ar">("en");
  const [openDrawer, setOpenDrawer] = useState(false);
  const router = useRouter();
  const cartItemCount = 3;

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "ar" : "en"));
  };

  const handleMenuClick = (path: string) => {
    router.push(path);
    setOpenDrawer(false);
  };

  return (
    <>
      <AntHeader
        className="header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#fff",
          padding: "0px 16px",
        }}>
        {/* Logo */}

        <img
          alt="Logo"
          src="assets/images/logo.png"
          style={{ width: 120, objectFit: "cover" }}
        />

        {/* Large screen menu */}
        <div className="desktop-menu">
          <Space>

            <Badge
              count={cartItemCount}
              size="small"
              offset={[-5, 5]}>
              <Button
                className="btn-menu"
                type="default"
                icon={<ShoppingCartOutlined />}
                onClick={() => router.push("/cart")}
              />
            </Badge>

            <Button
              className="btn-menu"
              type="default"
              icon={<HeartOutlined />}
              onClick={() => router.push("/favourites")}
            />

            <Button
              className="btn-menu"
              type="default"
              onClick={toggleLang}>
              {lang === "en" ? "AR" : "EN"}
            </Button>
          </Space>
        </div>

        {/* Mobile drawer menu button */}
        <div className="mobile-menu">
          <Button
            type="text"
            icon={<MenuOutlined style={{ color: "#fff", fontSize: "20px" }} />}
            onClick={() => setOpenDrawer(true)}
          />
        </div>
      </AntHeader>

      {/* Drawer for mobile */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}>
        <Menu
          mode="vertical"
          selectable={false}>
          <Menu.Item
            key="1"
            onClick={() => handleMenuClick("/products")}>
            {lang === "en" ? "Products" : "المنتجات"}
          </Menu.Item>
          <Menu.Item
            key="2"
            onClick={() => handleMenuClick("/cart")}>
            {lang === "en" ? "Cart" : "السلة"}
          </Menu.Item>
          <Menu.Item
            key="3"
            onClick={toggleLang}>
            {lang === "en" ? "العربية" : "English"}
          </Menu.Item>
        </Menu>
      </Drawer>
    </>
  );
}
