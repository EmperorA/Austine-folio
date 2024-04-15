import React, { useState, useRef } from "react";
import {
  Button,
  TextField,
  Typography,
  Snackbar,
  Container,
  Box,
} from "@mui/material";
import axios from "axios";

export default function Contact() {
  const [status, setStatus] = useState("");
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = e.target.elements;

    try {
      await axios.post("https://austine-folio.onrender.com/send-email", {
        name: name.value,
        email: email.value,
        message: message.value,
      });
      setStatus("SUCCESS");
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error("There was an error sending the email:", error);
      setStatus("ERROR");
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "64px" }}>
      {" "}
      <Typography
        variant="h4"
        sx={{ padding: "25px", color: "#A9A9A9", paddingLeft: "0" }}
      >
        Contact
      </Typography>
      <form ref={formRef} onSubmit={handleSubmit} sx={{ padding: "30px" }}>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            id="name"
            label="Your Name"
            name="name"
            required
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            id="email"
            label="Your Email"
            name="email"
            type="email"
            required
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            id="message"
            label="Message"
            name="message"
            multiline
            rows={4}
            required
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#A9A9A9",
              "&:hover": {
                backgroundColor: "#C43E00",
              },
            }}
          >
            Send Message
          </Button>
        </Box>
      </form>
      <Snackbar
        open={status === "SUCCESS"}
        autoHideDuration={6000}
        message="Thanks for contacting Austine!"
      />
      <Snackbar
        open={status === "ERROR"}
        autoHideDuration={6000}
        message="Ooops! There was an error."
      />
    </Container>
  );
}
