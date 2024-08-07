import * as React from "react";

import {
  Button,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Container,
} from "@mui/material";

export default function Projects() {
  return (
    <Container
      maxWidth="sm"
      style={{ marginTop: "100px", marginBottom: "100px" }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          color: "grey",
          fontSize: "0.6rem",
          paddingLeft: "0",
          paddingBottom: "16px",
        }}
      >
        MY WORKS
      </Typography>
      <Card sx={{ maxWidth: 750, maxHeight: 500 }}>
        <CardMedia
          component="img"
          height="350"
          src="img/landing-pet-adoption-demo-app.vercel.app.png"
          sx={{
            borderRadius: "12px",
            objectFit: "fill",
            objectPosition: "center",
          }}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            Pet Adoption App
          </Typography>
          <Typography variant="body2" color="text.secondary">
            REACT, VITE, TYPESCRIPT, NODEJS, POSTgreSQL
          </Typography>
        </CardContent>
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
          <Button size="small" color="primary">
            <a
              href="https://github.com/EmperorA/Pet_Adoption_Demo_App"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repo
            </a>
          </Button>
        </CardActions>
      </Card>{" "}
      <br />
      <Card sx={{ maxWidth: 750, maxHeight: 500 }}>
        <CardMedia
          component="img"
          height="350"
          src="img/Screenshot (5).png"
          sx={{
            borderRadius: "12px",
            objectFit: "fill",
            objectPosition: "center",
          }}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            E-commerce Web App
          </Typography>
          <Typography variant="body2" color="text.secondary">
            HTML, CSS, SASS, BOOTSTRAP, NODEJS, MONGODB
          </Typography>
        </CardContent>
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
          <Button size="small" color="primary">
            <a
              href="https://github.com/EmperorA/myproject"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repo
            </a>
          </Button>
        </CardActions>
      </Card>{" "}
      <br />
      <Card sx={{ maxWidth: 750, maxHeight: 500 }}>
        <CardMedia
          component="img"
          height="350"
          src="img/Screenshot (2).png"
          sx={{
            borderRadius: "12px",
            objectFit: "fill",
            objectPosition: "center",
          }}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            Real-time Weather App
          </Typography>
          <Typography variant="body2" color="text.secondary">
            HTML, CSS, BOOTSTRAP, NODEJS, API
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <a
              href="https://austine-weather-app-5508316fbac8.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          </Button>
          <Button size="small" color="primary">
            <a
              href="https://github.com/EmperorA/realtime-weather-API"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repo
            </a>
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
