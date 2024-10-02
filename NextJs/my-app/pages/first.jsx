import React from "react";
import styles from "../styles/home.module.css";
import Head from "next/head";

const first = () => {
  return (
    <div>
      <Head>
        <title>First Page</title>
      </Head>

      <h1 className={styles.myheading}> First Page</h1>
    </div>
  );
};

export default first;
