import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
} from "@mui/material";

export default function Content() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "80px",
      }}
    >
      <div>
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontFamily: "Arial, sans-serif",
            fontSize: "2.5rem",
            fontWeight: "500",
            color: "black",
            padding: "16px",
          }}
        >
          FULL STACK <br />
          WEB DEVELOPER
        </Typography>
      </div>
      <div
        style={{
          width: "100%", // Take the full width of the parent
          boxSizing: "border-box", // Include padding and border in element's total width and height
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            color: "grey",
            fontSize: "0.8rem",
            textAlign: "center",
            padding: "0 20px",
            "@media (min-width:600px)": {
              padding: "0 80px",
            },
          }}
        >
          Hello, My name is Austine Uwumwonse. I am a full stack Web Developer
          based in Bremen, Germany. I have always been captivated by the art of
          creation-whether tangible or digital.
        </Typography>
      </div>

      <Box sx={{ flexGrow: 1 }}>
        <Link
          to="/contact"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Button
            variant="contained"
            color="grey"
            sx={{
              my: 2,
              borderRadius: "16px",
              display: "block",
              fontSize: "0.6rem",
              backgroundColor: "black",
              color: "white",
              "&:hover": {
                backgroundColor: "#A9A9A9", // Dark Grey
                color: "black",
                fontWeight: "bold",
              },
            }}
          >
            Say Hello To Austine
          </Button>
        </Link>
      </Box>

      <div
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: "0.8rem",
            fontWeight: "bold",
            paddingLeft: "0",
            paddingBottom: "16px",
          }}
        >
          SOME OF MY PROJECTS
        </Typography>
        <Card sx={{ maxWidth: 500 }}>
          <CardMedia
            component="img"
            height="350"
            src="img/landing-pet-adoption-demo-app.vercel.app.png"
            sx={{
              borderRadius: "5px",
              objectFit: "fill",
              objectPosition: "center",
            }}
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "baseline",
            }}
          >
            <Typography variant="h5" component="div">
              Pet Adoption App
            </Typography>
            <CardActions>
              <Button size="small" color="primary">
                <a
                  href="https://pet-adoption-demo-app.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </Button>
            </CardActions>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 500 }}>
          <CardMedia
            component="img"
            height="300"
            src="img/Screenshot (5).png"
            sx={{
              borderRadius: "5px",
              objectFit: "fill",
              objectPosition: "center",
            }}
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "baseline",
            }}
          >
            <Typography variant="h5" component="div">
              E-commerce Web App
            </Typography>
            <CardActions>
              <Button size="small" color="primary">
                <a
                  href="https://aux-shop-0db7739fb157.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </Button>
            </CardActions>
          </CardContent>
        </Card>
        <br />
        <Card sx={{ maxWidth: 500 }}>
          <CardMedia
            component="img"
            height="350"
            src="img/Screenshot (3).png"
            sx={{
              borderRadius: "5px",
              objectFit: "fill",
              objectPosition: "center",
            }}
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "baseline",
            }}
          >
            <Typography variant="h5" component="div">
              Real-Time Weather App
            </Typography>
            <CardActions>
              <Button size="small" color="primary">
                <a
                  href="https://austine-weather-app-5508316fbac8.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </div>
    </Box>
  );
}
