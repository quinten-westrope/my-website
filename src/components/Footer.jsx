import React from 'react';
import { Box, Typography } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTheme } from '@mui/material/styles';

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

    const theme = useTheme();

    return (
        <Box sx={{ position: 'relative', width: '100%', minHeight: '100vh', marginTop: 13 }}>
            {/* Background Image */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${process.env.PUBLIC_URL}/footy.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(50%)', // Dim the background
                    zIndex: -1,
                }}
            />
            
            {/* Content */}
            <Box
                sx={{
                    zIndex: 1,
                    color: '#fff',
                }}
            >
                <Typography sx={{
                    variant: "h4",
                    gutterBottom: true,
                    textAlign: 'center',
                    fontFamily: 'Sans-serif',
                    fontSize: '4rem',
                    fontWeight: 550,
                    paddingTop: 18,
                    color: '#fff',
                    [theme.breakpoints.down('md')]: {
                        fontSize: '4rem'
                    },
                    [theme.breakpoints.down('sm')]: {
                        fontSize: '3rem'
                    },
                }}>
                    Contact Me
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        paddingTop: 6,
                    }}
                >
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginRight: 8,
                        [theme.breakpoints.down('md')]: {
                            marginRight: 3.5
                        },
                        [theme.breakpoints.down('sm')]: {
                            marginRight: 1.5
                        },
                    }}>
                        <LocalPhoneIcon sx={{ fontSize: 50, color: 'white' }} />
                        <Typography sx={{
                            color: 'white',
                            marginTop: 1,
                            fontSize: 18,
                            textAlign: 'center',
                            fontStyle: 'Sans-serif',
                            [theme.breakpoints.down('md')]: {
                                fontSize: 16
                            },
                            [theme.breakpoints.down('sm')]: {
                                fontSize: 14
                            },
                        }}>
                            <span style={{ fontWeight: 600 }}>Call Me</span><br />
                            <span style={{ fontSize: 15 }}>913-260-1614</span>
                        </Typography>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginLeft: 13,
                        marginRight: 13,
                        [theme.breakpoints.down('md')]: {
                            marginLeft: 5,
                            marginRight: 5
                        },
                        [theme.breakpoints.down('sm')]: {
                            marginLeft: 4,
                            marginRight: 4
                        },
                    }}>
                        <EmailIcon sx={{ fontSize: 50, color: 'white' }} />
                        <Typography sx={{
                            color: 'white',
                            marginTop: 1,
                            textAlign: 'center',
                            fontSize: 18,
                            fontStyle: 'Sans-serif',
                            [theme.breakpoints.down('md')]: {
                                fontSize: 16
                            },
                            [theme.breakpoints.down('sm')]: {
                                fontSize: 14
                            },
                        }}>
                            <span style={{ fontWeight: 600 }}>Email Me</span><br />
                            <span style={{ fontSize: 15 }}>quinnwestrope@ku.edu</span>
                        </Typography>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginLeft: 8,
                        [theme.breakpoints.down('md')]: {
                            marginLeft: 3.5
                        },
                        [theme.breakpoints.down('sm')]: {
                            marginLeft: 1.5
                        },
                    }}>
                        <LinkedInIcon sx={{ fontSize: 50, color: 'white' }} />
                        <Typography sx={{
                            color: 'white',
                            marginTop: 1,
                            textAlign: 'center',
                            fontSize: 18,
                            fontStyle: 'Sans-serif',
                            [theme.breakpoints.down('md')]: {
                                fontSize: 16
                            },
                            [theme.breakpoints.down('sm')]: {
                                fontSize: 14
                            },
                        }}>
                            <span style={{ fontWeight: 600 }}>Let's Connect</span><br />
                            <a className='icon' href="https://www.linkedin.com/in/quinten-westrope-q248" target="_blank" style={{ textDecoration: 'none', color: '#00b3b3' }}>
                                LinkedIn
                            </a>
                        </Typography>
                    </Box>
                </Box>

                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 50,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        textAlign: 'center',
                        width: '100%',
                        color: 'white',
                        fontFamily: 'playfair display',
                    }}
                >
                    <CopyrightIcon sx={{ marginRight: .5, verticalAlign: 'middle', fontSize: 13 }} />
                    <span style={{ verticalAlign: 'middle', fontWeight: 300, fontSize: 13 }}>Copyright 2024 Quinn Westrope</span>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;