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
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "#fff",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        padding: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
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
        onClose={() => setDrawerOpen(false)} // Close the drawer
        BackdropProps={{ sx: { backgroundColor: 'rgba(0, 0, 0, 0.1)' } }}
        sx={{
          '& .MuiDrawer-paper': {
            top: '0',
            width: '100%',
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            overflow: "hidden" // Hide overflow
          },
        }}
      >
        <Box sx={{ padding: 2, width: "100%" }}>
          {/* New hamburger menu icon for closing the drawer */}
          <IconButton
            onClick={toggleDrawer}
            sx={{ position: "absolute", top: "16px", right: "30px", color: "black", zIndex: 1001 }}
          >
            <MenuIcon />
          </IconButton>

          <List>
            <ListItem button onClick={handleLinkedClick} sx={{ marginTop: "32px" }}>
              <ListItemIcon>
                <LinkedInIcon style={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText primary="LinkedIn" sx={{ color: "black" }} />
            </ListItem>
            <ListItem button onClick={handleEmailClick} sx={{ marginTop: "8px" }}>
              <ListItemIcon>
                <EmailIcon style={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText primary="Email" sx={{ color: "black" }} />
            </ListItem>
            <ListItem button onClick={handleGitHubClick} sx={{ marginTop: "8px" }}>
              <ListItemIcon>
                <GitHubIcon style={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText primary="GitHub" sx={{ color: "black" }} />
            </ListItem>
            <ListItem button onClick={handleResumeClick} sx={{ marginTop: "8px" }}>
              <ListItemIcon>
                <PictureAsPdfIcon style={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText primary="Resume" sx={{ color: "black" }} />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Icons */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' }
        }}
      >
        <Tooltip title="LinkedIn">
          <Button onClick={handleLinkedClick} style={{ color: "black"}}>
            <LinkedInIcon fontSize="large" />
          </Button>
        </Tooltip>

        <Tooltip title="Email">
          <Box sx={{ marginLeft: 2}}>
            <Button onClick={handleEmailClick} style={{ color: "black" }}>
              <EmailIcon fontSize="large" />
            </Button>
          </Box>
        </Tooltip>

        <Tooltip title="GitHub">
          <Box sx={{ marginLeft: 2}}>
            <Button onClick={handleGitHubClick} style={{ color: "black" }}>
              <GitHubIcon fontSize="large" />
            </Button>
          </Box>
        </Tooltip>

        <Tooltip title="Resume">
          <Box sx={{ marginLeft: 2}}>
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
