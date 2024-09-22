// import React from 'react'
import { Box, Grid, TextField, Button, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Box sx={{ p: 4 }}>
      {/* Address and Contact Form */}
      <Grid container spacing={4}>
        {/* Company Address */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Our Address
          </Typography>
          <Typography variant="body1">Company Name</Typography>
          <Typography variant="body1">123 Business St.</Typography>
          <Typography variant="body1">City, Country 12345</Typography>
          <Typography variant="body1">Phone: (123) 456-7890</Typography>
          <Typography variant="body1">Email: info@company.com</Typography>
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Contact Us
          </Typography>
          <form>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Details"
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
            />
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Send Message
            </Button>
          </form>
        </Grid>
      </Grid>

      {/* Location */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" gutterBottom>
          Our Location
        </Typography>
        <Box
          sx={{
            height: "400px",
            width: "100%",
            backgroundColor: "#eee",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {}
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
