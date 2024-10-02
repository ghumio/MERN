import Link from "next/link";
import React from "react";

const example = () => {
  return (
    <div>
      this page does not exist. Go to <Link href={"/"}>Home</Link>
    </div>
  );
};

export default example;
