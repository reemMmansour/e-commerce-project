import { APP_NAME } from "@/lib/constants";
import Header from "@/shared/header/page";
import "./page.module.css";
import "./globals.css";

export const metadata = {
  title: APP_NAME,
  description: "A modern e-commerce platform built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
