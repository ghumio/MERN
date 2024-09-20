// import React from "react";

import { Box, Button, TextField, Typography, Link } from "@mui/material";
// import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Box
        width={"50%"}
        bgcolor={"#ccffee"}
        marginX={"auto"}
        marginY={5}
        className="text-xl"
        padding={5}
        textAlign={"center"}
      >
        <Typography variant="h4" sx={{ textDecoration: "underline" }}>
          Login
        </Typography>
        <TextField
          label="email"
          fullWidth
          placeholder="Enter your email here"
          variant="outlined"
          required
          helperText="example:abc@abc.com"
        ></TextField>
        <TextField
          label="Password"
          fullWidth
          placeholder="your password here"
          variant="outlined"
          required
          helperText="Password must contain 1 lowercase 1 uppercase 1 special character and must be at least 8 characters"
          type="password"
        />
        <Button variant="contained" size="large" fullWidth>
          Submit
        </Button>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          fontSize={"16px"}
        >
          <span>
            Already Have an account? <Link href="/register">Sign up.</Link>
          </span>
          <Link href="/forgetpassword">Forget Password</Link>
        </Box>
      </Box>
    </>
  );
};

export default Login;
