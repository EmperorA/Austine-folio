import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerStyle = {
    display: "flex",
    fontSize: "0.8rem",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
    backgroundColor: "#f2f2f2",
  };

  return (
    <footer style={footerStyle}>
      <p>MYFOLIO © {currentYear} | Designed by Austine</p>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <Link to="https://www.linkedin.com/in/austine-uwumwonse-7481aa12a/">
          <LinkedInIcon />
        </Link>
        <Link to="https://github.com/EmperorA">
          <GitHubIcon sx={{ marginRight: "10px" }} />
        </Link>
      </Box>
    </footer>
  );
}
