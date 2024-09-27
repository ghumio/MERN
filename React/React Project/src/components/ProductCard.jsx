import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Rating } from "@mui/material";
import { CurrencyRupee, ShoppingCart } from "@mui/icons-material";

export default function ProductCard({ item }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={item.images[0]}
        title={item.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" noWrap>
          {item.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          ${item.price}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Rating: <Rating value={item.rating} readOnly />
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          In Stock: {item.stock}
        </Typography>
      </CardContent>
      <CardActions>
        <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
          <Button size="small" startIcon={<ShoppingCart />}>
            Add to Cart
          </Button>
          <Button size="small" endIcon={<CurrencyRupee />}>
            Buy Now
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}
