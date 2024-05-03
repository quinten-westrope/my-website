import * as React from "react";
import Box from "@mui/material/Box";
import { Typography, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Button, Tooltip } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
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

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
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

      {/* Hamburger menu icon */}
      <IconButton
        onClick={toggleDrawer}
        sx={{ display: { xs: 'block', md: 'none' }, color: "black"}}
      >
        <MenuIcon />
      </IconButton>

      {/* Drawer for mobile */}
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={toggleDrawer}
        BackdropProps={{ sx: { backgroundColor: 'rgba(0, 0, 0, 0.1)' } }}
        sx={{
          '& .MuiDrawer-paper': {
            top: '77px',
            zIndex: 999,
          },
        }}
      >
        <List>
          <ListItem button onClick={handleLinkedClick}>
            <ListItemIcon sx={{ color: "black" }}>
              <LinkedInIcon />
            </ListItemIcon>
            <ListItemText primary="LinkedIn" primaryTypographyProps={{ color: "black" }} />
          </ListItem>
          <ListItem button onClick={handleEmailClick}>
            <ListItemIcon sx={{ color: "black" }}>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="Email" primaryTypographyProps={{ color: "black" }} />
          </ListItem>
          <ListItem button onClick={handleGitHubClick}>
            <ListItemIcon sx={{ color: "black" }}>
              <GitHubIcon />
            </ListItemIcon>
            <ListItemText primary="GitHub" primaryTypographyProps={{ color: "black" }} />
          </ListItem>
          <ListItem button onClick={handleResumeClick}>
            <ListItemIcon sx={{ color: "black" }}>
              <PictureAsPdfIcon />
            </ListItemIcon>
            <ListItemText primary="Resume" primaryTypographyProps={{ color: "black" }} />
          </ListItem>
        </List>
      </Drawer>

      {/* Icons */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          marginLeft: "auto",
        }}
      >
        <Tooltip title="LinkedIn">
          <Button onClick={handleLinkedClick} style={{ color: "black" }}>
            <LinkedInIcon fontSize="large" />
          </Button>
        </Tooltip>

        <Tooltip title="Email">
          <Box sx={{ marginLeft: 2 }}>
            <Button onClick={handleEmailClick} style={{ color: "black" }}>
              <EmailIcon fontSize="large" />
            </Button>
          </Box>
        </Tooltip>

        <Tooltip title="GitHub">
          <Box sx={{ marginLeft: 2 }}>
            <Button onClick={handleGitHubClick} style={{ color: "black" }}>
              <GitHubIcon fontSize="large" />
            </Button>
          </Box>
        </Tooltip>

        <Tooltip title="Resume">
          <Box sx={{ marginLeft: 2 }}>
            <Button onClick={handleResumeClick} style={{ color: "black" }}>
              <PictureAsPdfIcon fontSize="large" />
            </Button>
          </Box>
        </Tooltip>
      </Box>

    </Box>
  );
};

export default Header;