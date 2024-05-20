import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import MediaCard from './MediaCard';
import { useTheme } from '@mui/material/styles';
import { IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Button, Tooltip } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Grid from '@mui/material/Grid';
import KuLogo from './KuLogo';
import CopyrightIcon from '@mui/icons-material/Copyright';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const ActionAreaCard = () => {
    
    const theme = useTheme();

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

        <Box sx={{
            width: '100%',
        }}>
        
        {/* Background */}
        <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${process.env.PUBLIC_URL}/background.jpg)`, // Use url() function to specify the background image
            backgroundSize: 'cover',
            filter: 'brightness(70%)',
        }} 
        />


        {/* First page container to push the first card down */}
        <Box sx={{
            height: '100vh',
            position: 'relative',
        }}>
        


          {/* Empty content or introduction text */}
          <Typography variant="h2" sx={{ 
            textAlign: 'center',
            fontFamily: "Inter, Sans-serif",
            fontWeight: 750,
            color: "white",
            justifyContent: "center",
            flexDirection: "column",
            display: "flex",
            fontSize: "5.5rem",
            marginTop: "10rem",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add a subtle shadow
            [theme.breakpoints.down('md')]: {
                fontSize: '4rem'
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: '3rem'
            },

            }}>
            Quinn Westrope
          </Typography>


          {/* Icons under first page text */}
            <Box
                sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
                marginTop: 4,
                }}
            >
                <Tooltip title="LinkedIn">
                <Button className='icon' onClick={handleLinkedClick} style={{ color: "white"}}>
                    <LinkedInIcon fontSize="large" />
                    </Button>
                </Tooltip>

                <Tooltip title="Email">
                <Box sx={{ marginLeft: 1.5}}>
                    <Button className='icon' onClick={handleEmailClick} style={{ color: "white" }}>
                    <EmailIcon fontSize="large" />
                    </Button>
                </Box>
                </Tooltip>

                <Tooltip title="GitHub">
                <Box sx={{ marginLeft: 1.5}}>
                    <Button className='icon' onClick={handleGitHubClick} style={{ color: "white" }}>
                    <GitHubIcon fontSize="large" />
                    </Button>
                </Box>
                </Tooltip>

                <Tooltip title="Resume">
                <Box sx={{ marginLeft: 1.5}}>
                    <Button className='icon' onClick={handleResumeClick} style={{ color: "white" }}>
                    <PictureAsPdfIcon fontSize="large" />
                    </Button>
                </Box>
                </Tooltip>
            </Box>
            

        </Box>
  
        {/* Cards */}
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: 3, marginTop: -10 }}>
            <Grid container spacing={3} justifyContent="center">
                {/* Card 1 */}
                <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
                    <Card sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: 6,
                        boxShadow: '0px 0px 0px 0px',
                        backgroundColor: '#f0f0f0',
                    }}>
                        <Box sx={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            padding: 3,
                        }}>
                            <CardContent sx={{ width: '100%' }}>
                                <Typography gutterBottom variant="h4" component="div" sx={{
                                    fontFamily: 'Sans-serif',
                                    fontWeight: 550,
                                    color: 'black',
                                    textAlign: 'center',
                                    fontSize: '2.5rem',
                                }}>
                                    About Me
                                </Typography>
                                <Grid container spacing={1} alignItems="center">
                                    <Grid item xs={12} lg={4} sx={{
                                        [theme.breakpoints.down('md')]: { marginTop: -1.5 },
                                        [theme.breakpoints.down('sm')]: {
                                            display: 'flex',
                                            justifyContent: 'center',
                                            transform: 'scale(.9)',
                                            marginTop: -2.5,
                                        },
                                    }}>
                                        <MediaCard />
                                    </Grid>
                                    <Grid item xs={12} lg={8} sx={{
                                        [theme.breakpoints.down('md')]: { textAlign: 'center' },
                                        [theme.breakpoints.down('sm')]: { textAlign: 'center' },
                                    }}>
                                        <Typography variant="h6" color="black" fontFamily={'lora-regular'}>
                                            I'm currently working as a Product Support Specialist at <span style={{ fontWeight: 550 }}>Garmin</span> in their golf division. I'm passionate about technology and enjoy learning new things in my free time.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Box>
                    </Card>
                </Grid>

                {/* Card 2 */}
                <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
                    <Card sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: 6,
                        boxShadow: '0px 0px 0px 0px',
                        backgroundColor: '#f0f0f0',
                    }}>
                        <Box sx={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            padding: 3,
                        }}>
                            <CardContent sx={{ width: '100%' }}>
                                <Typography gutterBottom variant="h4" component="div" sx={{
                                    fontFamily: 'Sans-serif',
                                    fontWeight: 550,
                                    color: 'black',
                                    textAlign: 'center',
                                    fontSize: '2.5rem',
                                }}>
                                    Education
                                </Typography>
                                <Grid container spacing={1} alignItems="center">
                                    <Grid item xs={12} lg={4} sx={{
                                        [theme.breakpoints.down('md')]: { marginTop: -1.5 },
                                        [theme.breakpoints.down('sm')]: {
                                            display: 'flex',
                                            justifyContent: 'center',
                                            transform: 'scale(.9)',
                                            marginTop: -2,
                                        },
                                    }}>
                                        <KuLogo />
                                    </Grid>
                                    <Grid item xs={12} lg={8} sx={{
                                        [theme.breakpoints.down('md')]: { textAlign: 'center' },
                                        [theme.breakpoints.down('sm')]: { textAlign: 'center' },
                                    }}>
                                        <Typography variant="h6" color="black" fontFamily={'lora-regular'}>
                                            I'm a sophomore at the <span style={{ fontWeight: 550 }}>University of Kansas</span> studying Computer Science. I'm a member of the KU Association for Computing Machinery Club and Delta Tau Delta Fraternity.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Box>
                    </Card>
                </Grid>

                {/* Card 3 */}
                <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
                    <Card sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: 6,
                        boxShadow: '0px 0px 0px 0px',
                        backgroundColor: 'white',
                    }}>
                        <Box sx={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            padding: 3,
                        }}>
                            <CardContent sx={{ width: '100%' }}>
                                <Typography gutterBottom variant="h4" component="div" sx={{
                                    fontFamily: 'Sans-serif',
                                    fontWeight: 550,
                                    color: 'black',
                                    textAlign: 'center',
                                    fontSize: '2.5rem',
                                    paddingBottom: 2.5
                                }}>
                                    Projects
                                </Typography>
                                <Grid container spacing={1} alignItems="center">
                                    
                                        <Typography variant="h6" color="black" fontFamily={'lora-regular'} textAlign={'center'} paddingBottom={1}>
                                            <span style={{ fontWeight: 550 }}>BudgetBro</span>: Developed 'Budget Bro' app in Python for expense tracking and financial management.
                                        </Typography>

                                        <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        width: '100%',
                                        paddingBottom: 4,
                                        textDecoration: 'none',
                                        }}>
                                        <Button
                                            variant="outlined"
                                            endIcon={<ArrowOutwardIcon />}
                                            sx={{
                                                borderColor: '#000',  // Customize the border color
                                                color: '#000',        // Customize the text color
                                                borderRadius: 4,      // Rounded corners
                                                padding: '10px 20px', // Padding for the button
                                                textTransform: 'none',// Keep text casing as is
                                                borderWidth: 2,       // Border width
                                                '&:hover': {
                                                    borderWidth: 2,
                                                    borderColor: '#000',
                                                    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Slight background color on hover
                                                },
                                            }}
                                            >
                                            Learn More
                                            </Button>
                                        </Box>

                                        <Typography variant="h6" color="black" fontFamily={'lora-regular'} textAlign={'center'} paddingBottom={2}>
                                            <span style={{ fontWeight: 550 }}>Typing Evaluator</span>: Created a typing test application with adaptive difficulty levels for dynamic user experience.
                                        </Typography>

                                        <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        width: '100%',
                                        paddingBottom: 1,
                                        textDecoration: 'none',
                                        }}>
                                        <Button
                                            variant="outlined"
                                            endIcon={<ArrowOutwardIcon />}
                                            sx={{
                                                borderColor: '#000',  // Customize the border color
                                                color: '#000',        // Customize the text color
                                                borderRadius: 4,      // Rounded corners
                                                padding: '10px 20px', // Padding for the button
                                                textTransform: 'none',// Keep text casing as is
                                                borderWidth: 2,       // Border width
                                                '&:hover': {
                                                    borderWidth: 2,
                                                    borderColor: '#000',
                                                    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Slight background color on hover
                                                },
                                            }}
                                            >
                                            Learn More
                                        </Button>
                                    </Box>
                                        
                                    
                                </Grid>
                            </CardContent>
                        </Box>
                    </Card>
                </Grid>

            </Grid>
        </Box>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "black", fontFamily: "playfair display" }}>
          <CopyrightIcon style={{ marginRight: "5px", verticalAlign: "middle"}} fontSize="small" />
          <span style={{ verticalAlign: "middle", fontWeight: 300}}>2024 Quinn Westrope</span>
        </div>
        <br />
        <br />
        <br />

      </Box>
    );
  }
  
  export default ActionAreaCard;