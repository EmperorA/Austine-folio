import React from "react";
import { Link } from "react-router-dom";
import { Card, Typography, Box, Container, Button } from "@mui/material";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: "html.png" },
    { name: "CSS", icon: "css-3.png" },
    { name: "REACT JS", icon: "react.png" },
    { name: "TYPESCRIPT", icon: "github.png" },
    { name: "NODE.JS", icon: "nodejs.png" },
    { name: "MONGODB", icon: "react.png" },
    { name: "POSTGRESQL", icon: "nodejs.png" },
    { name: "DOCKER", icon: "docker.png" },
    { name: "KUBERNETES", icon: "css-3.png" },
    { name: "GITHUB", icon: "github.png" },
  ];

  return (
    <Container maxWidth="sm" style={{ marginTop: "64px" }}>
      <Typography
        variant="h4"
        sx={{ padding: "25px", color: "#A9A9A9", paddingLeft: "0" }}
      >
        SKILLS
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {skills.map((skill, index) => (
          <Card
            key={index}
            sx={{
              alignItems: "center",
              position: "relative",
              backgroundColor: "#f2f2f2",
              marginBottom: 2,
              minHeight: "150px",
              flex: "0 0 calc(50% - 8px)",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "40%",
                left: "40%",
                transform: "translate(-50%, -50%)",
                padding: 2,
              }}
            >
              <img // custom icon
                src={`${process.env.PUBLIC_URL}/icons/${skill.icon}`}
                alt={`${skill.name} icon`}
                style={{
                  width: "50px",
                  height: "50px",
                  position: "absolute",
                  zIndex: 1,
                }}
              />
            </Box>
            <Box
              sx={{
                borderRadius: "15px",
                position: "absolute",
                bottom: 10,
                left: 10,
                backgroundColor: "grey.300",
                padding: 0.5,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "Gill Sans, sans-serif",
                  fontSize: "0.6rem",
                  fontWeight: "bold",
                }}
              >
                {skill.name}
              </Typography>
            </Box>
          </Card>
        ))}
      </Box>
      <Container>
        <Box
          sx={{
            flexGrow: 1,
            padding: "20px 10px",
            display: "flex",
            justifyContent: "center",
            margin: 0,
            paddingBottom: 0,
          }}
        >
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
                fontSize: "rem",
                backgroundColor: "orange",
              }}
            >
              Say Hello Austine
            </Button>
          </Link>
        </Box>
        <Typography
          variant="subtitle1"
          sx={{
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            paddingBottom: "100px",
          }}
        >
          TO DISCUSS MORE ABOUT YOUR WEB APP
        </Typography>
      </Container>
    </Container>
  );
}
