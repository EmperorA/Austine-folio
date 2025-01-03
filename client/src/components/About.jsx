import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

export default function About() {
  return (
    <Container
      maxWidth="sm"
      sx={{ padding: "16px", marginTop: "70px", marginBottom: "70px" }}
    >
      <Card elevation="0">
        {" "}
        <Box>
          <Typography
            variant="h5"
            style={{ display: "flex", color: "#A9A9A9" }}
          >
            ABOUT ME
          </Typography>
        </Box>
        <Box style={{ display: "flex", flexDirection: "column" }}>
          <CardContent
            style={{
              textAlign: "justify",
              padding: "15px 0",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: "1rem",
              }}
            >
              Hello, my name is Austine, and I am a Full Stack Web Developer
              based in San Antonio TX.
              <br />
              I have always been captivated by the art of creation—whether
              tangible or digital. The ability to build something functional and
              aesthetically pleasing provides me immense satisfaction.
              <br />
              This drive led me to pivot my career from Research and Development
              to the dynamic world of technology. My primary objective as a Full
              Stack Web Developer is to craft modern web applications designed
              to streamline and enhance everyday life.
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            height="700"
            image="/img/profile.jpg"
            alt="profile"
            sx={{ borderRadius: "12px" }}
          />
          <Typography
            variant="body2"
            sx={{
              fontSize: "1rem",
              padding: "30px 0",

              textAlign: "justify",
            }}
          >
            My transition into the technology sector has been a calculated and
            successful endeavor, facilitated through rigorous bootcamp training,
            self-directed learning, and invaluable mentorship. <br /> In
            addition to my technical training, I hold a degree from the
            University of Bremen, Germany, further solidifying my academic and
            professional credentials.
          </Typography>
        </Box>
      </Card>
    </Container>
  );
}
