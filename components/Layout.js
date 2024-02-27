import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../styles/Layout.module.scss";

export default function Layout({ children }) {
  const [close, setClose] = useState(true);
  const handleClose = () => {
    setClose((prevClose) => !prevClose);
  };
  return (
    <div className={styles.layout}>
      <Navbar handleClose={handleClose} close={close} />
      <main onClick={setClose}>{children}</main>
      <Footer />
    </div>
  );
}
