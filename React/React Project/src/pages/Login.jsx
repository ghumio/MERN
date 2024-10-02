import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useReducer } from "react";
import { isLoggedIn } from "../redux/actions";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let userReducer = (userInfo, setUserInfo) => {
    return {
      ...userInfo,
      [setUserInfo.target.name]: setUserInfo.target.value,
    };
  };

  let userInfo = isLoggedIn();

  let [person, setPerson] = useReducer(userReducer, userInfo ? userInfo : {});

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!person.username || !person.email || !person.password) {
      Swal.fire("Alert!", "All fields are compulsory", "warning");
    } else {
      localStorage.setItem("userInfo", JSON.stringify(person));
      navigate("/");
    }
  };

  return (
    <Box
      p={6}
      mx={"auto"}
      my={5}
      boxShadow={"0 0 10px gray"}
      width={"50%"}
      borderRadius={"10px"}
    >
      <Typography variant="h5" my={3}>
        LOGIN
      </Typography>
      <TextField
        label="Username"
        fullWidth
        onChange={setPerson}
        name={"username"}
      />
      <TextField
        label="Email"
        fullWidth
        onChange={setPerson}
        name={"email"}
        sx={{ marginTop: "10px" }}
      />
      <TextField
        label="Password"
        fullWidth
        sx={{ marginTop: "10px" }}
        name={"password"}
        onChange={setPerson}
      />
      <Button
        fullWidth
        size="small"
        sx={{ marginTop: "10px" }}
        variant="contained"
        onClick={handleLogin}
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;
