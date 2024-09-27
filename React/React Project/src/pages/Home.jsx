import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "../redux/actions";
import { Grid } from "@mui/material";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const dispatch = useDispatch();
  const items = localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [];
  console.log(items);

  useEffect(() => {
    if (items?.length == 0) {
      dispatch(loadData());
    }
  }, []);

  return (
    <Grid container padding={2}>
      {items?.length > 0 &&
        items.map((item, i) => {
          return (
            <Grid item key={i} xs={12} sm={6} md={4} lg={3} padding={3}>
              <ProductCard item={item} />
            </Grid>
          );
        })}
    </Grid>
  );
};

export default Home;
