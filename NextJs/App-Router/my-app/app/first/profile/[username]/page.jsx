"use client";
import { useParams } from "next/navigation";
import React from "react";

const person = () => {
  const params = useParams();
  return <>Welcome,{params?.username}</>;
};

export default person;
