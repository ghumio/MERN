// import React from "react";

import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  Grid,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
// import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={11} sm={10} md={8} lg={6} marginX={"auto"}>
          <Box
            width={"100%"}
            bgcolor={"#ccffee"}
            marginX={"auto"}
            marginY={5}
            className="text-2xl"
            padding={5}
            textAlign={"center"}
          >
            <Typography variant="h4" sx={{ textDecoration: "underline" }}>
              Register
            </Typography>
            <TextField
              label="Username"
              fullWidth
              placeholder="Enter your username"
              variant="outlined"
              required
            ></TextField>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <Box display={"flex"} justifyContent={"space-evenly"}>
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </Box>
              </RadioGroup>
            </FormControl>
            <TextField
              label="email"
              fullWidth
              placeholder="Enter your email here"
              variant="outlined"
              required
              helperText="example:abc@abc.com"
              sx={{ marginTop: 2 }}
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
            <TextField
              label="About yourself"
              fullWidth
              variant="outlined"
              multiline
              rows={5}
            />
            <Button variant="contained" size="large" fullWidth>
              Submit
            </Button>
            <Box>
              <span>
                Already Have an account? <Link href="/register">Sign in.</Link>
              </span>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Register;
