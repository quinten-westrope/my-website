import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const Header = () => {
  const handleLinkedClick = () => {
    window.location.href = "https://www.linkedin.com/in/quinten-westrope-q248";
  };
  const handleEmailClick = () => {
    window.location.href = "mailto:quinnwestrope@ku.edu";
  };
  const handleGitHubClick = () => {
    window.location.href = "https://www.github.com/quinten-westrope";
  };
  const handleResumeClick = () => {
    window.location.href = "https://drive.google.com/file/d/1cf7m3oIH6huN3nF6N65Cb7hx5hM4xCbq/view?usp=sharing";
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
      
        <Box sx={{ marginLeft: 2 }}>
            <Button onClick={handleEmailClick} style={{ color: "black" }}>
                <EmailIcon fontSize="large" />
            </Button>
        </Box>

        <Box sx={{ marginLeft: 2 }}>
            <Button onClick={handleGitHubClick} style={{ color: "black" }}>
                <GitHubIcon fontSize="large" />
            </Button>
        </Box>

        <Box sx={{ marginLeft: 2 }}>
            <Button onClick={handleResumeClick} style={{ color: "black" }}>
                <PictureAsPdfIcon fontSize="large" />
            </Button>
        </Box>
    
    </Box>
  );
};

export default Header;
