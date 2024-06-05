import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import MediaCard from './MediaCard';
import { useTheme } from '@mui/material/styles';
import { IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Button, Tooltip, Modal } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Grid from '@mui/material/Grid';
import KuLogo from './KuLogo';
import CopyrightIcon from '@mui/icons-material/Copyright';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useState } from 'react';
import Footer from './Footer';

const ActionAreaCard = () => {
    
    const [openTyping, setOpenTyping] = useState(false); // State for Typing Evaluator modal
    const [openBudget, setOpenBudget] = useState(false);

    const handleOpenTyping = () => {
        setOpenTyping(true);
    };
    
    const handleCloseTyping = () => {
        setOpenTyping(false);
    };

    const handleOpenBudget = () => {
        setOpenBudget(true);
    };
    
    const handleCloseBudget = () => {
        setOpenBudget(false);
    };

    
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

                <Tooltip title="Resume">
                <Box sx={{}}>
                    <Button className='icon' onClick={handleResumeClick} style={{ color: "white" }}>
                    <PictureAsPdfIcon fontSize="large" />
                    </Button>
                </Box>
                </Tooltip>

                <Tooltip title="LinkedIn">
                <Box sx={{ marginLeft: 1.5}}>
                <Button className='icon' onClick={handleLinkedClick} style={{ color: "white"}}>
                    <LinkedInIcon fontSize="large" />
                    </Button>
                </Box>
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
                        paddingTop: 15
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
                                    fontSize: '3rem',
                                    paddingBottom: 2.5
                                }}>
                                    Projects
                                </Typography>
                                <Grid container spacing={1} alignItems="center">
                                    
                                    {/* BudgetBro Project */}
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
                                            onClick={handleOpenBudget}
                                            >
                                            Learn More
                                        </Button>
                                    </Box>
                                    
                                    {/* Modal for BudgetBro Project */}
                                    <Modal
                                        open={openBudget}
                                        onClose={handleCloseBudget} // Close the modal when the close button is clicked
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            width: { xs: '85%', sm: '75%', md: '70%', lg: '80%' },
                                            maxHeight: '80vh',
                                            overflowY: 'auto',
                                            bgcolor: 'background.paper',
                                            border: '2px solid #000',
                                            boxShadow: 24,
                                            p: { xs: 2, sm: 5, md: 5 },
                                            pb: {xs: 5},
                                            pt: {xs: 5},
                                            
                                            
                                        }}>

                                            <Typography variant="h4" marginBottom='2rem' fontFamily={'Sans-serif'}>
                                                BudgetBro
                                            </Typography>

                                            <Typography sx={{ mt: 2, fontFamily:'lora-regular', fontSize:19 }}>
                                                <span style={{ fontWeight: 550}}>Description: </span>BudgetBro is a desktop application designed to help users manage their personal finances effectively. Utilizing the Tkinter library for the graphical user interface (GUI), this Python-based tool allows users to track their expenses, maintain a budget, and receive personalized budget advice.
                                            </Typography>
                                            <br />

                                            <Typography sx={{ mt: 2, fontFamily:'lora-regular', fontSize:19 }}>
                                                <span style={{ fontWeight: 550}}>Technical Implementation</span>
                                            </Typography>

                                            <Typography sx={{ mt: 2, fontFamily:'lora-regular', marginTop: -.01, fontSize:19 }}>
                                            • <span style={{fontWeight: 550}}>Data Visualization:</span> Matplotlib is used to create pie charts representing the user's expense distribution
                                            </Typography>
                                            <Typography sx={{ mt: 2, fontFamily:'lora-regular', marginTop: -.01, fontSize:19 }}>
                                            • <span style={{fontWeight: 550}}>GUI:</span> Developed using Tkinter for a responsive and interactive user interface
                                            </Typography>
                                            <Typography sx={{ mt: 2, fontFamily:'lora-regular', marginTop: -.01, fontSize:19}}>
                                            • <span style={{fontWeight: 550}}>Real-Time Updates:</span> The application updates the UI in real-time to reflect changes in balances and expenses
                                            </Typography>
                                            <Typography sx={{ mt: 2, fontFamily:'lora-regular', marginTop: -.01, fontSize:19}}>
                                            • <span style={{fontWeight: 550}}>Image Handling:</span> Uses PIL (Pillow) to download, resize, and display images within the application
                                            </Typography>
                                    
                                            <br />
                                            

                                            <Typography sx={{ mt: 2, fontFamily:'lora-regular', fontSize:19 }}>
                                                <span style={{ fontWeight: 550}}>Key Technologies</span>
                                            </Typography>
                                            
                                            <Typography sx={{ mt: 2, fontFamily:'lora-regular', marginTop: -.01, fontSize:19}}>
                                            • <span style={{fontWeight: 550}}>Programming Languages:</span> Python
                                            </Typography>
                                            <Typography sx={{ mt: 2, fontFamily:'lora-regular', marginTop: -.01, fontSize:19}}>
                                            • <span style={{fontWeight: 550}}>Libraries:</span> Tkinter, PIL (Pillow), Requests, Matplotlib
                                            </Typography>

                                            {/* Close button for BudgetBro Modal*/}
                                            <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
                                            <Button
                                            variant="outlined"
                                            sx={{
                                                borderColor: '#000',  // Customize the border color
                                                color: '#000',        // Customize the text color
                                                borderRadius: 4,      // Rounded corners
                                                padding: '8px 16px', // Padding for the button
                                                textTransform: 'none',// Keep text casing as is
                                                borderWidth: 2,       // Border width
                                                marginTop: 2,
                                                marginBottom: -2,
                                                
                                                '&:hover': {
                                                    borderWidth: 2,
                                                    borderColor: '#000',
                                                    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Slight background color on hover
                                                },
                                            }}
                                            onClick={handleCloseBudget}>Close</Button> {/* Close button */}
                                            </Box>

                                        </Box>
                                    </Modal>
                                    
                                    {/* Typing Evaluator Project */}
                                    <Typography variant="h6" color="black" fontFamily={'lora-regular'} textAlign={'center'} paddingBottom={2}>
                                        <span style={{ fontWeight: 550 }}>Typing Evaluator</span>: Created a typing test application with adaptive difficulty levels for dynamic user experience.
                                    </Typography>

                                    <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    width: '100%',
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
                                        onClick={handleOpenTyping}
                                        >
                                        Learn More
                                    </Button>
                                    </Box>
                                    
                                    {/* Modal for Typing Evaluator Project */}
                                    <Modal
                                        open={openTyping}
                                        onClose={handleCloseTyping} // Close the modal when the close button is clicked
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            width: { xs: '85%', sm: '75%', md: '70%', lg: '80%' },
                                            maxHeight: '80vh',
                                            overflowY: 'auto',
                                            bgcolor: 'background.paper',
                                            border: '2px solid #000',
                                            boxShadow: 24,
                                            p: { xs: 2, sm: 5, md: 5 },
                                            pb: {xs: 5},
                                            pt: {xs: 5},
                                        }}>

                                            <Typography variant="h4" marginBottom='2rem' fontFamily={'Sans-serif'}>
                                                Typing Evaluator
                                            </Typography>

                                            <Typography sx={{ mt: 2, fontFamily:'lora-regular', fontSize:19 }}>
                                                <span style={{ fontWeight: 550}}>Description: </span>Typing Evaluator is a desktop application designed to measure and improve typing speed and accuracy. Built using the Tkinter library, this Python-based tool offers users the ability to practice typing with sentences of varying difficulty levels and track their typing performance over time
                                            </Typography>
                                            <br />

                                            <Typography sx={{ mt: 2, fontFamily:'lora-regular', fontSize:19 }}>
                                                <span style={{ fontWeight: 550}}>Technical Implementation</span>
                                            </Typography>

                                            <Typography sx={{ mt: 2, fontFamily:'lora-regular', marginTop: -.01, fontSize:19 }}>
                                            • <span style={{fontWeight: 550}}>GUI:</span> Simple and clear design created with Tkinter, making it easy for users to start, reset, and monitor their typing progress
                                            </Typography>
                                            <Typography sx={{ mt: 2, fontFamily:'lora-regular', marginTop: -.01, fontSize:19 }}>
                                            • <span style={{fontWeight: 550}}>Multithreading:</span> Threading to handle the timing mechanism, ensuring that the application remains responsive during typing tests
                                            </Typography>
                                            <Typography sx={{ mt: 2, fontFamily:'lora-regular', marginTop: -.01, fontSize:19}}>
                                            • <span style={{fontWeight: 550}}>Error Handling:</span> Highlights errors in red as the user types and turns green upon correct completion of the sentence
                                            </Typography>
                                            <Typography sx={{ mt: 2, fontFamily:'lora-regular', marginTop: -.01, fontSize:19}}>
                                            • <span style={{fontWeight: 550}}>Real-Time Typing Speed Measurement:</span> Calculates Words Per Minute and updates the display dynamically as the user types
                                            </Typography>
                                            
                                            <br />
                                            

                                            <Typography sx={{ mt: 2, fontFamily:'lora-regular', fontSize:19 }}>
                                                <span style={{ fontWeight: 550}}>Key Technologies</span>
                                            </Typography>
                                            
                                            <Typography sx={{ mt: 2, fontFamily:'lora-regular', marginTop: -.01, fontSize:19}}>
                                            • <span style={{fontWeight: 550}}>Programming Languages:</span> Python
                                            </Typography>
                                            <Typography sx={{ mt: 2, fontFamily:'lora-regular', marginTop: -.01, fontSize:19}}>
                                            • <span style={{fontWeight: 550}}>Libraries:</span> Tkinter, Threading
                                            </Typography>

                                            {/* Close button for Typing Evaluator Modal*/}
                                            <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
                                            <Button
                                            variant="outlined"
                                            sx={{
                                                borderColor: '#000',  // Customize the border color
                                                color: '#000',        // Customize the text color
                                                borderRadius: 4,      // Rounded corners
                                                padding: '8px 16px', // Padding for the button
                                                textTransform: 'none',// Keep text casing as is
                                                borderWidth: 2,       // Border width
                                                marginTop: 2,
                                                marginBottom: -2,
                                                
                                                '&:hover': {
                                                    borderWidth: 2,
                                                    borderColor: '#000',
                                                    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Slight background color on hover
                                                },
                                            }}
                                            onClick={handleCloseTyping}>Close</Button> {/* Close button */}
                                            </Box>

                                        </Box>
                                    </Modal>
                                </Grid>
                            </CardContent>
                        </Box>
                    </Card>
                </Grid>


                {/* Card 4 */}
                <Grid item xs={12} sx={{ display: 'flex' }}>
                        <Card sx={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            borderRadius: 6,
                            boxShadow: '0px 0px 0px 0px',
                            backgroundColor: 'white',
                            marginTop: -3,
                            
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
                                        fontSize: '3rem',
                                        paddingBottom: 1
                                    }}>
                                        Technical Skills
                                    </Typography>
                                    
                                            <Typography variant="h6" color="black" fontFamily={'lora-regular'} textAlign={'center'} paddingBottom={1}>
                                                <span style={{ fontWeight: 550}}>Languages:</span> Python, JavaScript(NodeJS ReactJS), HTML, CSS <br />
                                            </Typography>

                                            <Typography variant="h6" color="black" fontFamily={'lora-regular'} textAlign={'center'} paddingBottom={2}>
                                                <span style={{ fontWeight: 550 }}>Professional Tools:</span> Visual Studio Code, Github, Git<br /> 
                                            </Typography>

                                </CardContent>
                            </Box>
                        </Card>
                    </Grid>

            </Grid>
        </Box>

        {/* Footer */}
        <Footer />

        
      </Box>
    );
  }
  
  export default ActionAreaCard;