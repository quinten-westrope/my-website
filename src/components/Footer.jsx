import React from 'react';
import { Box, Typography } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Button, Tooltip, Modal } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



const Footer = () => {
  
const handleLinkedClick = () => {
    window.location.href = "https://www.linkedin.com/in/quinten-westrope-q248";
};
const handleEmailClick = () => {
    window.location.href = "mailto:quinnwestrope@ku.edu";
};
const handlePhoneClick = () => {
    window.location.href = "tel:913-260-1614";
};

  return (
    <Box
      sx={{
        marginTop: 25,
        backgroundColor: '#000', // Black background color
        color: '#fff', // White text color (adjust as needed)
        minHeight: '90vh', // Full viewport height
        padding: '50px', // Adjust padding as needed
        position: 'relative', // Relative positioning for the footer
      }}
    >
      <Typography variant="h4" gutterBottom textAlign={'center'} fontFamily={'Sans-serif'} fontSize={'2.5rem'} fontWeight={550}>
        Contact Me
      </Typography>

            <Box
                sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
                marginTop: 4,
                alignItems: 'center',
                }}
            >

                <Tooltip title="Mobile">
                <Box sx={{}}>
                    <Button className='icon' onClick={handlePhoneClick} style={{ color: "white" }}>
                    <LocalPhoneIcon fontSize="large" />
                    </Button>
                </Box>
                </Tooltip>

                <Tooltip title="Email">
                <Box sx={{}}>
                    <Button className='icon' onClick={handleEmailClick} style={{ color: "white" }}>
                    <EmailIcon fontSize="large" />
                    </Button>
                </Box>
                </Tooltip>

                <Tooltip title="LinkedIn">
                <Button className='icon' onClick={handleLinkedClick} style={{ color: "white"}}>
                    <LinkedInIcon fontSize="large" />
                    </Button>
                </Tooltip>

                
            </Box>
            

        


      <div style={{ position: 'absolute', bottom: '70px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', width: '100%', color: 'white', fontFamily: 'playfair display' }}>
        <CopyrightIcon style={{ marginRight: "5px", verticalAlign: "middle"}} fontSize="small" />
        <span style={{ verticalAlign: "middle", fontWeight: 300}}>2024 Quinn Westrope</span>
      </div>
    </Box>
  );
};

export default Footer;
