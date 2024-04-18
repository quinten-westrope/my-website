import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Header = () => {
  const handleLinkedClick = () => {
    window.location.href = "https://www.linkedin.com/in/quinten-westrope-q248";
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center", 
        justifyContent: "space-between",
        padding: 2,
        position: "sticky", 
        top: 0, 
        zIndex: 1000,
        backgroundColor: "#fff", 
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)"
      }}
    >
      <Typography variant="h4" sx={{ fontFamily: "montserrat", color: "black", fontWeight: 550 }}>
        Quinn Westrope
      </Typography>

      <Box sx={{ marginLeft: "auto" }}>
        <Button onClick={handleLinkedClick} style={{ color: "black" }}>
          <LinkedInIcon fontSize="large" />
        </Button>
      </Box>
    
    
    </Box>
  );
};

export default Header;
