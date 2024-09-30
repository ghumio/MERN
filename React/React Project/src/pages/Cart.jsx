import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { remove_from_cart, update_cart, update_cart1 } from "../redux/actions";

const Cart = () => {
  let cart_items = useSelector((store) => store.cartStore.cart_items);
  //   let cart_items = JSON.parse(localStorage.getItem("cart_items"));

  const dispatch = useDispatch();

  const handleDecrease = (cart_item) => (e) => {
    e.preventDefault();
    let quantity = cart_item.quantity - 1;

    if (quantity <= 0) {
      Swal.fire("Warning", "Quantity cannot be reduced", "warning");
    } else {
      let item = {
        ...cart_item,
        quantity: quantity,
      };
      dispatch(update_cart1(item));
    }
  };

  const handleIncrease = (cart_item) => (e) => {
    e.preventDefault();
    let quantity = cart_item.quantity + 1;

    if (quantity > cart_item.stock) {
      Swal.fire("Warning", "Quantity cannot be increased", "warning");
    } else {
      let item = {
        ...cart_item,
        quantity: quantity,
      };
      dispatch(update_cart(item));
    }
  };

  const handleRemove = (id) => (e) => {
    e.preventDefault();
    dispatch(remove_from_cart(id));
  };

  return (
    <>
      <Typography
        variant="h5"
        textAlign={"center"}
        sx={{ textDecoration: "underline" }}
      >
        Cart Items
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>S.NO.</TableCell>
              <TableCell align="center" colSpan={2}>
                Products
              </TableCell>
              <TableCell align="center">Unit Price</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Total Price</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart_items.map((cart_item, i) => (
              <TableRow
                key={cart_item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {i + 1}
                </TableCell>
                <TableCell align="right">
                  <img
                    src={cart_item.image}
                    alt={cart_item.title}
                    style={{ height: "100px" }}
                  />
                </TableCell>
                <TableCell align="right">{cart_item.title}</TableCell>

                <TableCell align="right">{cart_item.price}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="error"
                    onClick={handleDecrease(cart_item)}
                  >
                    -
                  </Button>
                  <span style={{ paddingLeft: "15px", paddingRight: "15px" }}>
                    {cart_item.quantity}
                  </span>

                  <Button
                    variant="contained"
                    color="warning"
                    onClick={handleIncrease(cart_item)}
                  >
                    +
                  </Button>
                </TableCell>
                <TableCell align="right">{cart_item.quantity}</TableCell>

                <TableCell align="right">
                  {(cart_item.price * cart_item.quantity).toFixed(2)}
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    onClick={handleRemove(cart_item.id)}
                  >
                    Remove Item
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Cart;
