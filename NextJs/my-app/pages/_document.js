import { Html, Head, Main, NextScript } from "next/document";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Header />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
