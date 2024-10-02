import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "../redux/actions";
import { Box, Grid, TextField } from "@mui/material";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [displayItems, setDisplayItems] = useState([]);
  let [search, setSearch] = useState("");

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

  useEffect(() => {
    setDisplayItems(
      items.filter((item) =>
        item.title.toLowerCase().match(search.toLowerCase())
      )
    );
  });

  return (
    <>
      <Box p={1} width={"50%"} mx={"auto"}>
        <TextField
          component={"search"}
          fullWidth
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>
      <Grid container padding={2}>
        {displayItems?.length > 0 &&
          displayItems.map((item, i) => {
            return (
              <Grid item key={i} xs={12} sm={6} md={4} lg={3} padding={3}>
                <ProductCard item={item} />
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};

export default Home;
