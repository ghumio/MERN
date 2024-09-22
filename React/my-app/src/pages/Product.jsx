// import React from 'react'

import { Bookmark, BookmarkBorder, BookOnline } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Link,
  ListItem,
  Radio,
  RadioGroup,
  Rating,
  Typography,
} from "@mui/material";

const Product = () => {
  return (
    <>
      <Grid container>
        <Grid item lg={3} md={4} xs={12} sm={6}>
          <Typography variant="h4">Deals</Typography>
          <ListItem>
            <Link
              href="#"
              underline="hover"
              color="warning.main"
              fontWeight={"bold"}
              fontSize={"20px"}
            >
              Daily Deals
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#"
              underline="hover"
              color="success.main"
              fontWeight={"bold"}
              fontSize={"20px"}
            >
              Most Popular
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#"
              underline="hover"
              color="secondary.main"
              fontWeight={"bold"}
              fontSize={"20px"}
            >
              Flash Sales
            </Link>
          </ListItem>
          <Typography variant="h5" mt={2} sx={{ textDecoration: "underline" }}>
            Categories
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  icon={<BookmarkBorder />}
                  checkedIcon={<Bookmark />}
                />
              }
              label="ALL"
            />
            <FormControlLabel
              control={<Checkbox icon={<BookOnline />} />}
              label="Mobiles"
            />
            <FormControlLabel control={<Checkbox />} label="Laptops" />
            <FormControlLabel control={<Checkbox />} label="Camera" />
            <FormControlLabel control={<Checkbox />} label="Clothing" />
          </FormGroup>

          <Typography variant="h5" mt={2} sx={{ textDecoration: "underline" }}>
            Prices
          </Typography>

          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="0"
              name="radio-buttons-group"
            >
              <FormControlLabel value="0" control={<Radio />} label="ALL" />
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="Upto $50"
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="$50 - $100"
              />
              <FormControlLabel
                value="3"
                control={<Radio />}
                label="$100 - $500"
              />
              <FormControlLabel
                value="4"
                control={<Radio />}
                label="$500 - $10000"
              />
            </RadioGroup>
          </FormControl>

          <Typography variant="h5" mt={2} sx={{ textDecoration: "underline" }}>
            Rating
          </Typography>
          <ListItem>
            <Rating value={1.5} readOnly max={10} precision={0.5} />
          </ListItem>
          <ListItem>
            <Rating value={2} readOnly />
          </ListItem>
          <ListItem>
            <Rating value={3} readOnly />
          </ListItem>
          <ListItem>
            <Rating value={4} readOnly />
          </ListItem>
          <ListItem>
            <Rating value={5} readOnly />
          </ListItem>
        </Grid>
        <Grid item lg={9} md={8} bgcolor={"#ffccee"} xs={12} sm={6} container>
          <Grid item xs={11} margin={"auto"} md={4} lg={3} p={"10px"}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="100"
                image="/public/assets/1.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={11} margin={"auto"} md={4} lg={3} p={"10px"}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="100"
                image="/public/assets/1.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={11} margin={"auto"} md={4} lg={3} p={"10px"}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="100"
                image="/public/assets/1.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={11} margin={"auto"} md={4} lg={3} p={"10px"}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="100"
                image="/public/assets/1.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={11} margin={"auto"} md={4} lg={3} p={"10px"}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="100"
                image="/public/assets/1.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={11} margin={"auto"} md={4} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="100"
                image="/public/assets/1.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Product;
